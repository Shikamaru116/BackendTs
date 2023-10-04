const express = require("express")
const app = express();

const example = function(){
    console.log("hola que hace XD")
}

app.listen(9000, example)