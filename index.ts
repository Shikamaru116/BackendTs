const express = require("express")
import router from "./src/routes";

const app = express();

const port = 9000;

const initialize = () => {
    console.log(`Hola que hace XD, el server se esta corriendo en el puerto ${port}`);
}


router(app);



app.listen(port, initialize);