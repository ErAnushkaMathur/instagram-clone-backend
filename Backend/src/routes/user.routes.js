const express = require("express")
const UserController = require("../controllers/user.controller")
const identifyUser = require("../middlewares/auth.middleware")
const followRequestController = require("../controllers/followRequestController")


const userRouter = express.Router() 

/**
 * @route POST /api/user/follow/:userid
 * @description  Follow a user
 * @access Private
 */

userRouter.post("/follow/:username", identifyUser,  UserController.followUserController )

/**
 * @route POST /api/user/unfollow/:userid
 * @description  Unfollow a user
 * @access Private
 */
userRouter.post("/unfollow/:username", identifyUser,  UserController.unfollowUserController
)

/**
 * @route POST /api/user/follow-request/:requestid
 * @description  send a follow request
 */
userRouter.post("/follow-request/:username", identifyUser, followRequestController.sendRequestController )
module.exports = userRouter

/**
 * @route POST /api/user/follow-request/:requestId/accept
 * @description  accept follow request
 */
 userRouter.patch("/follow-request/:requestId/accept", identifyUser, followRequestController.acceptFollowRequestController)

/**
 * @route POST /api/user/follow-request/:requestId/accept
 * @description  reject follow request
 */
 userRouter.patch("/follow-request/:requestId/reject", identifyUser, followRequestController.rejectFollowRequest)