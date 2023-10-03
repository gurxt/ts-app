import { useState, useEffect } from "react";
import NoteApplication from "./components/NoteApplication"
import NoteItem from "./components/NoteItem"
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState<{
    id: string;
    title: string;
    description?: string;
  }[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await axios.get("http://localhost:8000/note/");
      setNotes(data.notes);
    }
    fetchNotes();
  }, []);

  return (
    <div className="h-[100vh] w-[100vw] bg-slate-700 space-y-2 pt-2 overflow-x-hidden overflow-y-auto" >
      <NoteApplication notes={notes} setNotes={setNotes} />
    </div>
  );
};


export default App
