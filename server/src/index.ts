import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Hello Timothy, King of All</h1>");
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  res.json({
    message: "I am listening..."
  })
  console.log(req.body);
})

app.post("/create", (req, res) => {
  res.json({
    message: "I am listening..."
  })
  console.log(req.body);
})

app.listen(8000, () => {
  console.log("listening...");
})