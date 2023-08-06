import Makanan from "../models/makanan.js"

export const createMakanan = async (req, res, next)=>{
    
    const newMakanan = new Makanan(req.body)
    
    try{
        const savedMakanan = await newMakanan.save()
        res.status(200).json(savedMakanan)
    }catch(err){
        next(err);
    }
}

export const updateMakanan = async (req, res, next)=>{
    
    try{
        const updatedMakanan = await Makanan.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedMakanan)
    }catch(err){
        next(err);
    }
}

export const deleteMakanan = async (req, res, next)=>{
    try{
        await Makanan.findByIdAndDelete(req.params.id)
        res.status(200).json("Makanan sudah dihapus.")
    }catch(err){
        next(err);
    }
}

export const getMakanan = async (req, res, next)=>{
    try{
        const makanan = await Makanan.findById(req.params.id);
        res.status(200).json(makanan)
    }catch(err){
        next(err);
    }
}

export const getMakanans = async (req, res, next)=>{
    try{
        const makanans = await Makanan.find()
        res.status(200).json(makanans)
    }catch(err){
        next(err);
    }
}