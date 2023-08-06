import mongoose from 'mongoose';
const { Schema } = mongoose;

const KamarSchema = new mongoose.Schema({
    no_kamar:{
        type: String,
        required: true
    },
    arr_date:{
        type: String,
        required: true
    },
    dep_date:{
        type: String,
        required: true
    },
    status_checkin:{
        type: Number,
        required: true
    },
    status_reserved:{
        type: Number,
        required: true
    }
})
 
export default mongoose.model("Kamar", KamarSchema)