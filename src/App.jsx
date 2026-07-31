import { useEffect, useState } from "react"
import NoteList from "./component/NoteList"
import ColorSelector from "./component/ColorSelector";

function App(){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState('#f1c8ff');

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
            date: new Date().toLocaleDateString(),
            color: selectedColor
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
                setIsOpen = {setIsOpen}
            />
            {isOpen && (<div className="fixed inset-0 flex flex-col items-center justify-center"> {/*color popup window*/}
                    <ColorSelector 
                        setIsOpen = {setIsOpen} 
                        setSelectedColor = {setSelectedColor} 
                    />
            </div>)}
        </div>
    )
}
export default App