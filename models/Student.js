import mongoose from "mongoose";

// Schema for students
const studentSchema = new mongoose.Schema({
  name: String,
  className: String,
});

studentSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// Model for students
const Students = mongoose.model("Students", studentSchema);

export default Students;
