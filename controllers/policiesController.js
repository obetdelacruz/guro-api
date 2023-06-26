import Policies from "../models/Policies.js";

//HTTP GET ALL policies
async function getPolicies(req, res) {
  const Policies = await Policies.find({});

  return res.status(200).json(Policies);
}

//HTTP CREATE/POST Policies
async function createPolicies(req, res) {
  try {
    const { title, description } = req.body;

    const newPolicies = new Policies({
      title,
      description,
    });

    const savedPolicies = await newPolicies.save();
    res.status(201).json(savedPolicies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create policies" });
  }
}

export default {
  //other Routes
  getPolicies,
  createPolicies,
};
