var fs= require("fs")

fs.readFile('demo.txt','utf8',function(err,data){
    if(err){
        console.log.error("error");
    }else{
    console.log(data);
    }
})