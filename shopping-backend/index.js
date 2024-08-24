import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {server} from './db/index.js'
import {router as productRouter} from './Router/product.router.js'
import {router as userRouter } from './Router/user.router.js'
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", productRouter);
app.use("/user", userRouter )

app.listen(3000, ()=>{
  console.log(`http://localhost:3000/`);
})

server();

