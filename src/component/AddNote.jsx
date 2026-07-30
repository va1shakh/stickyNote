import { useState } from "react"

function AddNote({addNote}){
    const [title, setTitle] =useState('');
    const [noteText, setNoteText] = useState('');
    const [remaining, setRemaining] = useState(200);
    
    function handleTitle(event){
        setTitle(event.target.value);
    }
    function handleNoteText(event){
        setNoteText(event.target.value);
        setRemaining(200 - event.target.value.length);
    }
    function handleSave(){
        if(title !== '' && noteText !== ''){
            addNote(title, noteText);
            setTitle('');
            setNoteText('');
        }
    }
    return (
        <div className="bg-[#a6138d] p-4 rounded-xl flex flex-col shadow-lg gap-3"> {/* card */}
            <div className="flex flex-col gap-2">{/*title and notes*/}
                <input 
                    className="p-1 py-2 rounded-lx border-none outline-none text-white placeholder-white text-lg" 
                    type="text" 
                    placeholder="Enter title..." 
                    maxLength={40}
                    value={title}
                    onChange={handleTitle}
                />
                <textarea 
                    className="p-2 rounded-lg h-30 bg-[#c33ead] outline-none resize-none text-white placeholder-white shadow-sm" 
                    placeholder="Enter note..." 
                    maxLength={200}
                    value={noteText}
                    onChange={handleNoteText}
                />
            </div>
            <div className="flex items-center justify-between p-2 text-white"> {/*remaining and save button*/}
                <small className="text-sm">{remaining} remaining</small>
                <button 
                    className="bg-white text-[#560045] p-2 px-4 rounded-lg hover:bg-[#fef0fb] cursor-pointer text-lg shadow-lg" onClick={handleSave}>
                    save
                </button>
            </div>
        </div>
    )
}
export default AddNote