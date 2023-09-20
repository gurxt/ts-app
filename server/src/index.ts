import express from 'express';
import "./db"
import Note, { INote } from "./models/note";

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Hello Timothy, King of All</h1>");
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  console.log("tim zoleta");
})

app.post("/create", async (req, res) => {
  await Note.create<INote>({
    title: req.body.title, 
    description: req.body.description 
  })
  res.json({ message: "[INFO] listening to create."});
});

app.listen(8000, () => {
  console.log("[INFO] listening on port 8000");
})