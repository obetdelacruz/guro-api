import express from "express";
import teacherController from "../controllers/teacherController.js";

const teacherRouter = express.Router();

//get all teachers
teacherRouter.get("/", teacherController.getTeachers);

//get teacher by id
teacherRouter.get("/:id", teacherController.getTeacher);

//create teacher
teacherRouter.post("/", teacherController.createTeacher);

export default teacherRouter;
