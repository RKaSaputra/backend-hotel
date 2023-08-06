import mongoose from 'mongoose';
const { Schema } = mongoose;

const TamuSchema = new mongoose.Schema({
    nama:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    no_telp:{
        type: String,
        required: true
    },
    alamat:{
        type: String,
        required: true
    },
    jenis_kelamin:{
        type: String,
        required: true
    }
})
 
export default mongoose.model("Tamu", TamuSchema)