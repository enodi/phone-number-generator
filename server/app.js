import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/phone-number", routes);
//Static file declaration
app.use(express.static(path.join(__dirname, "../client/public/dist")));

//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/public/dist")));

  app.get("*", (req, res) => {
    res.sendfile(path.join(__dirname, "../client/public/dist/index.html"));
  });
}


app.listen(process.env.PORT, () => {
  console.log(`App runnning on port ${process.env.PORT}`);
});

export default app;
