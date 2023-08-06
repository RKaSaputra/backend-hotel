import Kamar from "../models/Kamar.js"

export const createKamar = async (req, res, next)=>{
    
    const newKamar = new Kamar(req.body)
    
    try{
        const savedKamar = await newKamar.save()
        res.status(200).json(savedKamar)
    }catch(err){
        next(err);
    }
}

export const updateKamar = async (req, res, next)=>{
    
    try{
        const updatedKamar = await Kamar.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedKamar)
    }catch(err){
        next(err);
    }
}

export const deleteKamar = async (req, res, next)=>{
    try{
        await Kamar.findByIdAndDelete(req.params.id)
        res.status(200).json("Kamar sudah dihapus.")
    }catch(err){
        next(err);
    }
}

export const getKamar = async (req, res, next)=>{
    try{
        const kamar = await Kamar.findById(req.params.id);
        res.status(200).json(kamar)
    }catch(err){
        next(err);
    }
}

export const getKamars = async (req, res, next)=>{
    try{
        const kamars = await Kamar.find()
        res.status(200).json(kamars)
    }catch(err){
        next(err);
    }
}