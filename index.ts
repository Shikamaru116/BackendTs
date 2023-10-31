const express = require("express")
import routes from "./src/network";


const app = express();
routes(app)


const port = 9000;

const initialize = () => {
    console.log(`Hola que hace XD, el server se esta corriendo en el puerto ${port}`);
}


routes(app);



app.listen(port, initialize);