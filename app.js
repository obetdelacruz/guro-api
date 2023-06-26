import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./utils/config.js";
import loginRouter from "./routes/loginRouter.js";
import policiesRouter from "./routes/policiesRouter.js";
import teacherRouter from "./routes/teacherRouter.js";
import studentRouter from "./routes/studentRouter.js";
import newsRouter from "./routes/newsRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
import unknownEndpoint from "./middlewares/unknownEndpoint.js";

const app = express();

async function connectToDB(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB");
  } catch (error) {
    console.log(`Error connecting to DB${error}`);
  }
}

connectToDB(config.MONGODB_URI);

// Setup of Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use("/api/login", loginRouter);
app.use("/api/policies", policiesRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/student", studentRouter);
app.use("/api/news", newsRouter);
app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
