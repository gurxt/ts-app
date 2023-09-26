const App = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-5 space-y-4">
      <h1 className="font-semibold text-2xl text-blue-400">
        Note Application
      </h1>
      <div>
        <input 
          className="w-full border-b-2 border-gray-700 outline-none"  
          placeholder="Title" 
          type="text" 
        />
      </div>
      <div>
        <textarea 
          className="w-full h-36 border-b-2 border-gray-700 outline-none resize-none"
          placeholder="Description"
        >
        </textarea>
      </div>
      <div className="text-right">
        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">
          Submit
        </button>
      </div>
    </div>
  )
}

export default App
