import { Router } from 'express';
import { 
  createNote,
  patchNote, 
  deleteNote, 
  getAllNotes,
  getOneNote
} from "../controllers/note.controller"

const router = Router();

router.post("/create", createNote);
router.patch("/:noteId", patchNote);
router.delete("/:noteId", deleteNote);
router.get("/", getAllNotes);
router.get("/:noteId", getOneNote);

export default () => router;