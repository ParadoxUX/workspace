import { Router } from "express";
import { getUsers, getUser } from "../controllers/users.controller.js";
import { get } from "http";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
