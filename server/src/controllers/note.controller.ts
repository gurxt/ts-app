import { RequestHandler } from "express";
import Note, { INote } from "../models/note.model";

interface IBody {
  title: string;
  description?: string;
}

export const createNote: RequestHandler = async (req, res) => {
  const note = await Note.create<INote>({
    title: (req.body as IBody).title, 
    description: (req.body as IBody).description 
  })

  res.json({ 
    note: { 
      id: note._id,
      title: note.title,
      description: note.description
    }
  });
}

export const patchNote: RequestHandler = async (req, res) => { 
  const { noteId } = req.params;
  const { title, description } = req.body as IBody;
  const note = await Note.findByIdAndUpdate(
    noteId, 
    { title, description },
    { new: true });

  if (!note) return;
  await note.save()

  res.json({ note });
}

export const deleteNote: RequestHandler = async (req, res) => { 
  const { noteId } = req.params;
  const note = await Note.findByIdAndDelete(noteId);

  if (!note) return res.json({ error: "failed to delete note."});

  res.json({ message: `deleted note with id: ${noteId}`});
}

export const getAllNotes: RequestHandler = async (req, res) => {
  const notes = await Note.find();
  res.json({ notes: notes.map(note => ({
    id: note.id,
    title: note.title,
    description: note.description
  }) )})
}

export const getOneNote: RequestHandler = async (req, res) => {
  const { noteId } = req.params;
  const note = await Note.findById(noteId);

  res.json({ note });
}