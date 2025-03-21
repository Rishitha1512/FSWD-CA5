import React, {useState} from "react"
import AddNoteForm from "./components/AddNoteForm"
import NoteList from "./components/NoteList"

const App = () =>{
  const [notes,setNotes] = useState([]);

  const handleNoteAdded = (newNote) =>{
    setNotes((prevNotes)=>[...prevNotes,newNote])
  }

  return(
    <div>
      <h1>Notes Manager Application</h1>
      <AddNoteForm onNoteAdded={handleNoteAdded}/>
      <NoteList notes={notes}/>
    </div>
  )
};

export default App