import Pegawai from "../models/Pegawai.js"

export const createPegawai = async (req, res, next)=>{
    
    const newPegawai = new Pegawai(req.body)
    
    try{
        const savedPegawai = await newPegawai.save()
        res.status(200).json(savedPegawai)
    }catch(err){
        next(err);
    }
}

export const updatePegawai = async (req, res, next)=>{
    
    try{
        const updatedPegawai = await Pegawai.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedPegawai)
    }catch(err){
        next(err);
    }
}

export const deletePegawai = async (req, res, next)=>{
    try{
        await Pegawai.findByIdAndDelete(req.params.id)
        res.status(200).json("Pegawai sudah dihapus.")
    }catch(err){
        next(err);
    }
}

export const getPegawai = async (req, res, next)=>{
    try{
        const pegawai = await Pegawai.findById(req.params.id);
        res.status(200).json(pegawai)
    }catch(err){
        next(err);
    }
}

export const getPegawais = async (req, res, next)=>{
    try{
        const pegawais = await Pegawai.find()
        res.status(200).json(pegawais)
    }catch(err){
        next(err);
    }
}