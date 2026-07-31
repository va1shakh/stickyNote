import { Trash2 } from "lucide-react";

function Note({note, dltNote}) {
  return (
    <div style={{backgroundColor: note.color}} className=" p-4 rounded-xl gap-5 flex flex-col justify-between shadow-lg wrap-break-word"> {/* Note card */}
      <h2 className="font-outfit capitalize font-medium tracking-wider text-2xl">{note.title}</h2> {/* Title */}
      <p className="font-inter text-lg whitespace-normal break-word">{note.text}</p> {/* notes */}
      <div className="flex items-center justify-between"> {/* date and delete button */}
        <small className="font-inter date">{note.date}</small>
        <button className="cursor-pointer hover:text-[#804077]" onClick={() => dltNote(note.id)}>
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
export default Note;
