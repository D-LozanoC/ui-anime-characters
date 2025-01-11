import express from "express";
const app = express();

app.get("/", function (_req, res){
    res.send('Express on Vercel')
});

export default app