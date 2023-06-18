import mongoose from "mongoose";
const MONGODB_URI =
  "mongodb+srv://ldelacruz:uT268TDpv9kjxfzY@cluster0.ykgpqoq.mongodb.net/?retryWrites=true&w=majority";

async function connectToDB(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB");
  } catch (error) {
    console.log(`Error connecting to DB${error}`);
  }
}

connectToDB(MONGODB_URI);

// Schema for grades
const gradeSchema = new mongoose.Schema({
  student_name: {
    first_name: String,
    middle_name: String,
    last_name: String,
  },
  section: {
    section_name: String,
    teacher_fullname: String,
  },
  subjects: {
    mother_tongue: Number,
    filipino: Number,
    english: Number,
    math: Number,
    araling_panlipunan: Number,
    mapeh: {
      music: Number,
      arts: Number,
      pe: Number,
      health: Number,
    },
    GMRC: Number,
    general_average: Number,
  },
});

// Model for grades
const Grade = mongoose.model("Grade", gradeSchema);

// Create a grade database
const gradeInfo = new Grade({
  student_name: {
    first_name: "Obet",
    middle_name: "Dakila",
    last_name: "Luna",
  },
  section: {
    section_name: "A",
    teacher_fullname: "Lobert Badilla Dela Cruz",
  },
  subjects: {
    mother_tongue: 100,
    filipino: 100,
    english: 100,
    math: 100,
    araling_panlipunan: 100,
    mapeh: {
      music: 100,
      arts: 100,
      pe: 100,
      health: 100,
    },
    GMRC: 100,
    general_average: 100,
  },
});

// Save the grade database
gradeInfo.save().then((result) => {
  console.log("Grade saved");
  mongoose.connection.close();
});
