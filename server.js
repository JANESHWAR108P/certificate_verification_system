const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/certificate", require("./routes/certificateRoutes"));
app.use("/api/certificates", require("./routes/certificateRoutes"));
app.use("/uploads", express.static("uploads"));

app.listen(5000, () => console.log("Server running on 5000"));
