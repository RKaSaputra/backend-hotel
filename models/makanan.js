import mongoose from 'mongoose';
const { Schema } = mongoose;

const MakananSchema = new mongoose.Schema({
    nama_makanan:{
        type: String,
        required: true
    },
    harga:{
        type: String,
        required: true
    }
})
 
export default mongoose.model("Makanan", MakananSchema)