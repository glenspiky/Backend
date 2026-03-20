const express = require("express");

const router = express.Router()

//? get nijas from db
router.get('/ninjas',(req,res)=>{
res.send({Type:"GET"})
})
//? add nijas from db

router.post("/ninjas", (req, res) => {
  console.log(req.body);
  
  res.send({ Type: "POST",
    title:req.body.title,
    auther:req.body.auther
  } );
});
//? update nijas from db

router.put("/ninjas/:id", (req, res) => {
  res.send({ Type: "PUT" });
});
//? delete nijas from db

router.delete("/ninjas/:id", (req, res) => {
  res.send({ Type: "DELETE" });
});

module.exports=router