const fs = require("fs");
// fs.writeFile("message.txt", "DID I JUST WRITE SOMETHING HERE??", (err)=>{
//     if (err) throw err;
//     console.log("The file has been saved.");
// });

fs.readFile("message.txt" , "utf8", (err, data)=>{
    if (err) throw err;
    console.log(data);
});