const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    mongoose.connect(process.env.MONGOOSE_URL);
    console.log("Connect Success!");
  } catch (error) {
    console.log("Conner Error");
  }
};

// ket noi csdl
