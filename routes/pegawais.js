import express from 'express';
import { createPegawai, updatePegawai, deletePegawai, getPegawai, getPegawais } from "../controllers/pegawai.js"
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createPegawai);

//UPDATE
router.put("/:id", verifyAdmin, updatePegawai)

//DELETE
router.delete("/:id", verifyAdmin, deletePegawai)

//GET
router.get("/:id",verifyAdmin, getPegawai)

//GET ALL
router.get("/",verifyAdmin, getPegawais)

export default router