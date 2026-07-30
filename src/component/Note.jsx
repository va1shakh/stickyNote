import { Trash2 } from "lucide-react";

function Note({note, dltNote}) {
  return (
    <div className="bg-[#f1c8ff] p-4 rounded-xl gap-5 flex flex-col justify-between shadow-lg"> {/* Note card */}
      <h2>{note.title}</h2> {/* Title */}
      <p className="whitespace-normal break-word">{note.text}</p> {/* notes */}
      <div className="flex items-center justify-between"> {/* date and delete button */}
        <small className="date">{note.date}</small>
        <button className="cursor-pointer hover:text-[#804077]" onClick={() => dltNote(note.id)}>
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
export default Note;
