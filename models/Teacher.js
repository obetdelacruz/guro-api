import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const teacherSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  age: Number,
  passwordHash: String,
  role: {
    type: String,
    enum: ["teacher"],
    required: true,
  },
  persons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
    },
  ],
});

teacherSchema.plugin(uniqueValidator);

teacherSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
