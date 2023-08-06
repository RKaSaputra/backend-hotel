import express from 'express';
import { createTamu, updateTamu, deleteTamu, getTamu, getTamus } from "../controllers/tamu.js"
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createTamu);

//UPDATE
router.put("/:id", verifyAdmin, updateTamu)

//DELETE
router.delete("/:id", verifyAdmin, deleteTamu)

//GET
router.get("/:id", getTamu)

//GET ALL
router.get("/", verifyAdmin, getTamus)

export default router