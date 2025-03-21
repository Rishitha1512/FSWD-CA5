import React, {useEffect, useState} from "react"
import axios from "axios"


const NoteList = ({notes}) =>{
    const [allNotes,setAllNotes] = useState(notes)

    useEffect(()=>{
        axios.get("http://localhost:5000/notes")
        .then((response)=>setAllNotes(response.data))
        .catch((error)=>console.error("error",error))
    },[notes])


    return(
        <div>
            <h2>Notes List</h2>
            <ul>
                {allNotes.map((note)=>(
                    <li key={note._id}>
                        <hr></hr>
                        <strong>Title: </strong>
                        {note.title}
                        <br></br>
                        <strong>Content: </strong>
                        {note.content}
                        <hr></hr>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default NoteList;