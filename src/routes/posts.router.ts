import { Router } from "express";
import {
  getAllPosts,
  getPost,
  createNewPost,
  removePost,
} from "../controllers.js";

const router = Router();

router.get("/", getAllPosts);
router.post("/", createNewPost);
router.get("/:id", getPost);
router.delete("/:id", removePost);

export default router;
