const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://janeshwarpandey97_db_user:Pandey97@jpcluster1.rhqu0le.mongodb.net/certificates?appName=JPCluster1"
    );
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
