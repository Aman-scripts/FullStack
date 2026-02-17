import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utlis/db.js"
import userRoutes from "./routes/user.routes.js"

dotenv.config()

const app = express()

const port = process.env.PORT||8080

app.use(cors({
  origin:process.env.BASE_URL,
  credentials:true,
  methods:['GET',"POST", "DELETE","OPTIONS"],
  allowedHeaders:['Content-Type','Authorization']
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/aman',(req,res)=>{res.send('Hello Aman Is Here')})

db();

//User routes

app.use("/api/v1/users/",userRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
