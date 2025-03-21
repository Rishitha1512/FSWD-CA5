import React, {useState} from "react"
import axios from "axios"


const AddNoteForm = ({onNoteAdded}) =>{
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newNote = {title,content}

        axios.post("http://localhost:5000/notes",newNote)
        .then((response)=>{
            onNoteAdded(response.data)
            setTitle("")
            setContent("")
        })
        .catch((error)=>console.error("error",error))
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add new Note</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Content"
                value={content}
                onChange={(e)=>setContent(e.target.value)}
            />
            <button type="Submit">Add Note</button>
        </form>
    )
};

export default AddNoteForm;