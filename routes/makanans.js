import express from 'express';
import { createMakanan, updateMakanan, deleteMakanan, getMakanan, getMakanans } from "../controllers/makanan.js"
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createMakanan);

//UPDATE
router.put("/:id", verifyAdmin, updateMakanan)

//DELETE
router.delete("/:id", verifyAdmin, deleteMakanan)

//GET
router.get("/:id", getMakanan)

//GET ALL
router.get("/", getMakanans)

export default router