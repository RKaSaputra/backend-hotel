import express from 'express';
import { createKamar, updateKamar, deleteKamar, getKamar, getKamars } from "../controllers/kamar.js"
import Kamar from "../models/Kamar.js"
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createKamar);

//UPDATE
router.put("/:id", verifyAdmin, updateKamar)

//DELETE
router.delete("/:id", verifyAdmin, deleteKamar)

//GET
router.get("/:id", getKamar)

//GET ALL
router.get("/", getKamars)

export default router