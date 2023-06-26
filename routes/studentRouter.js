import express from "express";
import studentController from "../controllers/studentController.js";

const studentRouter = express.Router();

//get students by id
studentRouter.get("/:id"), studentController.getStudent;

//create students
studentRouter.post("/", studentController.createStudent);

export default studentRouter;
