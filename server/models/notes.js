const mongoose=require('mongoose');
const noteSchema=mongoose.Schema({note: String},{timestamps:true})
mongoose.model("Note",noteSchema);