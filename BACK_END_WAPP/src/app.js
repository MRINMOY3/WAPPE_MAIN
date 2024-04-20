import express from 'express';
const app = express();

//Adding the routes


app.post('/test',(req,res)=>{
    res.send("Hello From the server")// a middleware
})

export default app