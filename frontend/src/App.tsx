import NoteApplication from "./components/NoteApplication"
import NoteItem from "./components/NoteItem"

const App = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-slate-700 space-y-2 pt-2 overflow-x-hidden overflow-y-auto" >
      <NoteApplication />
      <NoteItem title="I love my tim" />
      <NoteItem title="Yes, indeed I do." />
      <NoteItem title="One day, he will leave my side." />
      <NoteItem title="It will be a dark day indeed." />
    </div>
  );
};


export default App
