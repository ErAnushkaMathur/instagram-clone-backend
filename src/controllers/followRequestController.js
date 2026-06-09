const followModel = require("../models/followModel")
const followRequestModel = require("../models/followRequestModel")
const userModel = require("../models/userModel")

async function sendRequestController(req, res) {

  const follower = req.user.username
  const followee = req.params.username


  const FolloweeUser = await userModel.findOne({
    username: followee
  })

  if (!FolloweeUser) {
    return res.status(404).json({
      message: `${followee} does not exist`
    })
  }

  if (followee === follower) {
    return res.status(400).json({
      message: `YOu cannot send request to yourself`
    })
  }

  const isFollowing = await followModel.findOne({
    Follower: follower,
    Followee: followee
  })
  if (isFollowing) {
    return res.status(409).json({
      message: `YOu are already following`
    })
  }

  const followRequest = await followRequestModel.findOne({
    Follower: follower,
    Followee: followee,
    status: "pending"
  })

  if (followRequest) {
    return res.status(400).json({
      message: "Request is already pending"
    })
  }

  if (FolloweeUser.isPrivate) {
    await followRequestModel.create({
      Follower: follower,
      Followee: followee,
      status: "pending"
    })
    console.log("Inside private account block");

    return res.status(201).json({
      message: "Follow request sent"
    })
  }

  console.log("isPrivate:", FolloweeUser.isPrivate);

  await followModel.create({
    Follower: follower,
    Followee: followee,
  })
  return res.status(200).json({
    message: "user followed successfully!"
  })

}

async function acceptFollowRequestController(req, res) {

  const requestId = req.params.requestId
  const loggedInUser = req.user.username

  const request = await followRequestModel.findById(requestId)

  if (!request) {
    return res.status(404).json({
      message: "request not found"
    })
  }

  const followee = request.Followee
  const follower = request.Follower
  const requestStatus = request.status

  if (loggedInUser != followee) {
    return res.status(409).json({
      message: " unauthorized access"
    })
  }

  if (requestStatus != "pending") {
    return res.status(409).json({
      message: `You have already ${requestStatus} the request`
    })
  }

  const alreadyFollowing = await followModel.findOne({
    Follower: follower,
    Followee: followee
  })
  if (alreadyFollowing) {
    return res.status(400).json({
      message: "You are already following"
    })
  }

  await followRequestModel.findByIdAndUpdate(requestId, {
    status: "accepted"
  })

  await followModel.create({
    Follower: follower,
    Followee: followee,
  })
  return res.status(200).json({
    message: "Request accepted"
  })
}

async function rejectFollowRequest(req, res) {
  const requestId = req.params.requestId;
  const loggedInUser = req.user.username;

  // 1. find request
  const request = await followRequestModel.findById(requestId);

  // 2. check exists
  if (!request) {
    return res.status(404).json({
      message: "Request not found"
    });
  }

  // 3. authorization check
  if (loggedInUser !== request.Followee) {
    return res.status(403).json({
      message: "Unauthorized access"
    });
  }

  // 4. status check
  if (request.status !== "pending") {
    return res.status(400).json({
      message: `You have already ${request.status} this request`
    });
  }

  // 5. update status to rejected
  await followRequestModel.findByIdAndUpdate(requestId, {
    status: "rejected"
  });

  return res.status(200).json({
    message: "Follow request rejected"
  });
}

module.exports = { sendRequestController, acceptFollowRequestController, rejectFollowRequest }