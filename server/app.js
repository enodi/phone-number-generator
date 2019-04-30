import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import routes from "./routes";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Static file declaration
app.use(express.static(path.join(__dirname, "../client/public/dist")));

//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/public/dist")));

  app.get("*", (req, res) => {
    res.sendfile(path.join(__dirname, "../client/public/dist/index.html"));
  });
}

app.use("/api/v1/phone-number", routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: { message: err.message }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App runnning on port ${process.env.PORT}`);
});

export default app;
