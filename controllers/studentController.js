import Students from "../models/Student.js";

//HTTP GET ALL Students
async function getStudents(req, res) {
  const students = await Students.find();
  return res.status(200).json(students);
}

//HTTP CREATE/POST Students
async function createStudents(req, res) {
  try {
    const { name, className } = req.body;

    const newStudent = new Students({
      name,
      className,
    });

    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create student" });
  }
}
export default {
  //other Routes
  getStudents,
  createStudents,
};
