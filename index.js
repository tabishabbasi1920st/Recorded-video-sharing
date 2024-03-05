const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" })); // to parse the

app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

app.post("/upload-recorded-video", (req, res) => {
  const { recordedVideo } = req.body;

  if (recordedVideo) {
    const bufferedData = new Buffer.from(recordedVideo, "base64");
    fs.writeFileSync(`recorded_video/${v4()}.mp4`, bufferedData);
    console.log("recorded video saved successfully");
  }
});

app.listen(5000, () => {
  console.log("Server is running at port: 5000");
});
