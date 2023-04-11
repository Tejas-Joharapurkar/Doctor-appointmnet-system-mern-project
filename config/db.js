const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Tejas:T.e.j.a.s.@nodeandexpressproject.nz4re1q.mongodb.net/Booking?retryWrites=true&w=majority");
    // console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    // console.log(`Mongodb Server Issue ${error}`.bgRed.white);
    console.log(error);
  }
};

module.exports = connectDB;
