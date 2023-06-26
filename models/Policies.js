import mongoose from "mongoose";

// Schema for classroom policies
const policiesSchema = new mongoose.Schema({
  title: String,
  description: String,
});

policiesSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// Model for classroom policies
const Policies = mongoose.model("Policies", policiesSchema);

export default Policies;
