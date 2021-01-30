import express from "express";
// const morgan = require("morgan");
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

// Global MiddleWares
app.use(helmet({ contentSecurityPolicy: false }));
// app.use(function (req, res, next) {
//   res.setHeader("Content-Security-Policy", "script-src 'self'  https://archive.org");
//   // res.setHeader(
//   //   "Content-Security-Policy",
//   //   "script-src 'self’ ‘unsafe-eval'; object-src 'self'"
//   // );
//   return next();
// });
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
