import express from "express";
import policiesController from "../controllers/policiesController.js";

const policiesRouter = express.Router();

//get all policies
policiesRouter.get("/", policiesController.getPolicy);

//create policies
policiesRouter.post("/", policiesController.createPolicies);

export default policiesRouter;
