const EventEemiter = require("events")
const emiter=new EventEemiter()
//register a listener
emiter.on("messageLogged",(arg)=>{
    console.log("Listener called",arg);
    
})
//Raise an event
emiter.emit("messageLogged", {id:1,url:"//"})

//logging event

emiter.on("logging",()=>{
    console.log("logging");
    
})
emiter.emit("logging")