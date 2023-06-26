import News from "../models/News.js";

//HTTP GET ALL NEWS
async function getNews(req, res) {
  const news = await News.find({});
  return res.status(200).json(news);
}

//http create/post news
async function createNews(req, res) {
  try {
    const { title, description, author } = req.body;

    const newNews = new News({
      title,
      description,
      author,
    });

    const savedNews = await newNews.save();
    res.status(201).json(savedNews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create news article" });
  }
}

export default {
  //other Routes
  getNews,
  createNews,
};
