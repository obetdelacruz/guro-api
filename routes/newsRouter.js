import express from "express";
import newsController from "../controllers/newsController.js";

const newsRouter = express.Router();

//get all news
newsRouter.get("/", newsController.getNews);

//create news
newsRouter.post("/", newsController.createNews);

export default newsRouter;
