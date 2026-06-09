const mongoose = require("mongoose")

const followRequestSchema = new mongoose.Schema({
  Follower: String,
  Followee: String,
  status : {
    type : String,
    default : "pending",
    enum : ["accepted" , "rejected", "pending"]
  }
})

const followRequestModel =  mongoose.model("followRequests", followRequestSchema)

module.exports = followRequestModel