const express = require("express")
const Note = require("../models/Note")
const router = express.Router()


router.post("/",async(req,res)=>{
    const {title,content} = req.body
    try{
        const newNote = new Note({title,content})
        await newNote.save();
        res.json(newNote)
    }catch(er){
        res.status(500).json({message:"Error"})
    }
});


router.get("/",async(req,res)=>{
    try{
        const notes = await Note.find()
        res.status(200).json(notes)
    }catch(er){
        res.status(500).json({message:"Error"})
    }
});

module.exports = router