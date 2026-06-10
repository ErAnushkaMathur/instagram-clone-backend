const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
  Follower : {
  type : String,
},
  Followee: {
  type : String,
  }
},
{
  timestamps : true
})
followSchema.index(
  {Follower: 1, Followee : 1}, {unique: true}
)

const followModel = mongoose.model("follows" , followSchema)

module.exports = followModel