const dotenv = require("dotenv");
dotenv.config();
const {
  RemoveBgResult,
  RemoveBgError,
  removeBackgroundFromImageFile,
} = require("remove.bg");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join("images")));

const localFile = `${__dirname}/2022-10-26 164630.jpg`;
const outputFile = `${__dirname}/img-removed-from-file.png`;

// removeBackgroundFromImageFile({
//   path: localFile,
//   apiKey: "NQgN2GsTZM5T6yHcqGksEsBB",
//   size: "regular",
//   type: "auto",
//   scale: "50%",
//   outputFile,
// })
//   .then((result) => {
//     console.log(`File saved to ${outputFile}`);
//     const base64img = result.base64img;
//   })
//   .catch((errors) => {
//     console.log(JSON.stringify(errors));
//   });

app.listen(5000);
