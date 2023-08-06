import mongoose from 'mongoose';
const { Schema } = mongoose;

const TypeSchema = new mongoose.Schema({
    type_kamar:{
        type: String,
        required: true
    },
    fasilitas:{
        type: String,
        required: true
    },
    kapasitas:{
        type: String,
        required: true
    },
    harga:{
        type: String,
        required: true
    },
})
 
export default mongoose.model("Type", TypeSchema)