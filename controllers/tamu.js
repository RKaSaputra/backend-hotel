import Tamu from "../models/Tamu.js"

export const createTamu = async (req, res, next)=>{
    
    const newTamu = new Tamu(req.body)
    
    try{
        const savedTamu = await newTamu.save()
        res.status(200).json(savedTamu)
    }catch(err){
        next(err);
    }
}

export const updateTamu = async (req, res, next)=>{
    
    try{
        const updatedTamu = await Tamu.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedTamu)
    }catch(err){
        next(err);
    }
}

export const deleteTamu = async (req, res, next)=>{
    try{
        await Tamu.findByIdAndDelete(req.params.id)
        res.status(200).json("Tamu sudah dihapus.")
    }catch(err){
        next(err);
    }
}

export const getTamu = async (req, res, next)=>{
    try{
        const tamu = await Tamu.findById(req.params.id);
        res.status(200).json(tamu)
    }catch(err){
        next(err);
    }
}

export const getTamus = async (req, res, next)=>{
    try{
        const tamus = await Tamu.find()
        res.status(200).json(tamus)
    }catch(err){
        next(err);
    }
}