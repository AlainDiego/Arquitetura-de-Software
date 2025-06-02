import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.post("/authors", AuthorController.createAuthor);
routes.get("/authors", AuthorController.getAllAuthors);

export default routes;