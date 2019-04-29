import express from "express";
import { generatePhoneNumbers, getPhoneNumbers, downloadFile } from "../controllers/PhoneNumber";

const app = express.Router();

app.route("/").post(generatePhoneNumbers);
app.route("/").get(getPhoneNumbers);
app.route("/download").get(downloadFile);

export default app;
