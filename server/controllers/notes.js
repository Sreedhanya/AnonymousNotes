
const mongoose=require("mongoose");
const Note=mongoose.model("Note");

module.exports={
    add:(req,res)=>
    {
        Note.findOne({note: req.body.note}).then(data=>{
            
            if(data)
            {
                res.json(true);
            }
              else
        {
let new_note=new Note({note: req.body.note})
console.log("Note is"+ new_note.note)
new_note.save()
        }
        
        }
      
        ).then((note)=>res.json(true))
        .catch(err=>res.status(500).json(err))
       
        

    },
    show:(req,res)=>
    {
        Note.find().then(data=>res.json(data))
        .catch(err=>res.status(500).json(err))

    }
}