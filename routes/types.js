import express from 'express';
import { createType, updateType, deleteType, getType, getTypes } from "../controllers/type.js"
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createType);

//UPDATE
router.put("/:id", verifyAdmin, updateType)

//DELETE
router.delete("/:id", verifyAdmin, deleteType)

//GET
router.get("/:id", getType)

//GET ALL
router.get("/", getTypes)

export default router