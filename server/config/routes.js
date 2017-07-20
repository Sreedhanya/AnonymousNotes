//var notes=require('../controllers/notes.js');
 const path=require("path");
const notes=require("./../controllers/notes.js")
  
   module.exports=(app) =>{
       app.post("/", notes.add);
       app.get("/show",notes.show)
       app.get("*", (req,res)=>{
           res.sendFile(path.resolve("./angularAnonymous/dist/index.html"));
       })
       
   }

