import { useState, ChangeEventHandler, FC, Dispatch, SetStateAction } from "react"
import axios from "axios";

interface INote {
  id: string;
  title: string;
  description?: string;
}
interface INoteApplication {
  notes: INote[];
  setNotes: Dispatch<SetStateAction<INote[]>>;
}

const NoteApplication: FC<INoteApplication> = ({ notes, setNotes }) => {
  const [values, setValues] = useState({
    title: "",
    description: ""
  });

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({ target }) => {
    const { name, value } = target;
    setValues(prev => ({...prev, [name]: value }));
  };

  return (
    <form 
      className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-5 space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const { data } = await axios.post(
          'http://localhost:8000/note/create',
          {
            title: values.title,
            description: values.description
          }
        );
        setNotes([data.note, ...notes]);
        setValues({title: '', description: ''});
      }}
    >
      <h1 className="font-semibold text-2xl text-blue-400">
        Note Application
      </h1>
      <div>
        <input 
          className="w-full border-b-2 border-gray-700 outline-none"  
          placeholder="Title" 
          type="text" 
          value={values.title}
          name="title"
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea 
          className="w-full h-36 border-b-2 border-gray-700 outline-none resize-none"
          placeholder="Description"
          name="description"
          onChange={handleChange}
          value={values.description}
        >
        </textarea>
      </div>
      <div className="text-right">
        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NoteApplication;