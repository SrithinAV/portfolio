import  express  from "express";
import 'dotenv/config.js';
import indexRouter from './routes/gemini.js';
import cors from 'cors';
import contactRouter from './routes/contact.js';


const app = express();
const port = process.env.PORT;
app.use(cors())

app.get("/",(req,res)=>
{
    res.send("API working good")
})

app.use("/contact", contactRouter);
app.use("/gemini", indexRouter);

app.listen(port,()=>
{
    console.log(`server started on port  ${port}`)
})
