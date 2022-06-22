const http = require('http');
const express = require('express');
const { mongoConnect } = require('./service/mongodb');



const datarouter = require('./routers/userData.router');

const app = express();

const PORT = process.env.PORT || 3000;


const server = http.createServer(app);
app.use(express.json());

app.use('/user',datarouter);

async function startServer(){
    await mongoConnect();
    server.listen(PORT,() => {
        console.log(`Listning on port ${PORT}..`);
    })
};
startServer();


