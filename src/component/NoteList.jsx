import AddNote from "./AddNote"
import Note from "./Note"

function NoteList({notes, addNote, dltNote}){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {notes.map((note) => <Note key={note.id} note = {note} dltNote={dltNote} />)}
            <AddNote addNote = {addNote}/>
        </div>
    )
}
export default NoteList