import express from "express";
import bodyParser from "body-parser";
import { randomPoem, randomPoemWithFilter } from "./controllers/poetryController.js"

export const poetryRoute = express.Router();

poetryRoute.get('/random', randomPoem);
poetryRoute.get('/random/:categoryId', randomPoemWithFilter);

export default poetryRoute;