import Teacher from "../models/Teacher.js";

// HTTP GET ALL teachers
async function getTeachers(req, res) {
  const teachers = await Teacher.find();
  return res.status(200).json(teachers);
}

//HTTP GET Teacher

async function getTeacherById(req, res) {
  const teacherId = req.params.id;

  try {
    const teacher = await Teacher.findOne({ _id: teacherId });

    if (!teacher) {
      res.status(404).json({ error: "Teacher not found" });
      return;
    }

    res.status(200).json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get teacher" });
  }
}

// HTTP CREATE/POST teachers
async function createTeachers(req, res) {
  try {
    const { username, name, age, passwordHash } = req.body;

    const newTeacher = new Teacher({
      username,
      name,
      age,
      passwordHash,
    });

    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create teacher" });
  }
}

export default {
  // Other routes
  getTeachers,
  getTeacherById,
  createTeachers,
};
