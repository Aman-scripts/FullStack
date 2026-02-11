import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()

const port = process.env.PORT||8080

app.use(cors({
  origin:"http://localhost:8080",
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

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
