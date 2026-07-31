import { useEffect, useState } from "react"
import NoteList from "./component/NoteList"
import ColorSelector from "./component/ColorSelector";
import SearchBar from "./component/SearchBar";

function App(){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState('#f1c8ff');
    const [searchText, setSearchText] = useState('');

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

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(searchText.toLowerCase()) ||
               note.text.toLowerCase().includes(searchText.toLowerCase())
    })

    const displayedNotes = searchText === '' ? notes:filteredNotes;

    // debugging
    // console.log(displayedNotes);

    return(
        <div className="mr-2 ml-2 p-4">
            {/*search bar*/}
            <div className="mb-4">
                <SearchBar setSearchText = {setSearchText} />
            </div>

            {/*notes*/}
            <NoteList 
                displayedNotes = { displayedNotes }
                addNote = {addNote} 
                dltNote = {dltNote}
                setIsOpen = {setIsOpen}
            />

            {/*color popup window*/}
            {isOpen && (<div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50">
                    <ColorSelector 
                        setIsOpen = {setIsOpen} 
                        setSelectedColor = {setSelectedColor} 
                    />
            </div>)}
            {/* debugging */}
            {/* <h1 className="text-red-500">{filteredNotes}</h1> */}
        </div>
    )
}
export default App