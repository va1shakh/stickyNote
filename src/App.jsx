import { useEffect, useState } from "react"
import NoteList from "./component/NoteList"

function App(){
    const [notes, setNotes] = useState(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));
        return savedNotes ? savedNotes:[];
    })
    
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])

    const addNote = (title, noteText) => {
        const newNote = {
            id: Date.now(),
            title: title, 
            text: noteText,
            date: new Date().toLocaleDateString()
        };
        setNotes([...notes, newNote]);
    }

    const dltNote = (id) => {
        const deletedNotes = notes.filter((note) => id !== note.id);
        setNotes(deletedNotes);
    }

    return(
        <div className="mr-2 ml-2 p-4">
            <NoteList 
                notes = { notes }
                addNote = {addNote} 
                dltNote = {dltNote}
            />
        </div>
    )
}
export default App