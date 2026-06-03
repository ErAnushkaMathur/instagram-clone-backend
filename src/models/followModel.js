const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
  Follower : {
  type : mongoose.Schema.Types.ObjectId,
  ref:"user",
  required : [true , "Follower is require"]
},
  Followee: {
  type : mongoose.Schema.Types.ObjectId,
  ref : "user",
  required : [true , "Followee is required"]
  }
},
{
  timestamps : true
})

const followModel = mongoose.model("follows" , followSchema)

module.exports = followoModel