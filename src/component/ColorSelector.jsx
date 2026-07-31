function ColorSelector({ setIsOpen, setSelectedColor }) {
  return (
    <div className="bg-[#fefefe] rounded-lg w-100 h-70 max-sm:w-80 max-sm:h-60 drop-shadow-2xl flex items-center p-3 flex-wrap gap-2 fixed overflow-auto">
      <h1 className="border-2 rounded-lg px-4 py-2 bg-[#310041] text-white w-full mb-7">
        Select color
      </h1>
      <button className="rounded-4xl bg-[#FFF4B8] w-15 h-15 cursor-pointer focus:border-3" onClick={() => setSelectedColor('#FFF4B8')}></button>
      <button className="rounded-4xl bg-[#DCEBFF] w-15 h-15 cursor-pointer focus:border-3" onClick={() => setSelectedColor('#DCEBFF')}></button>
      <button className="rounded-4xl bg-[#D9F2D9] w-15 h-15 cursor-pointer focus:border-3" onClick={() => setSelectedColor('#D9F2D9')}></button>
      <button className="rounded-4xl bg-[#FDE2E4] w-15 h-15 cursor-pointer focus:border-3" onClick={() => setSelectedColor('#FDE2E4')}></button>
      <button className="rounded-4xl bg-[#E8DDF5] w-15 h-15 cursor-pointer focus:border-3" onClick={() => setSelectedColor('#E8DDF5')}></button>
      <div className="flex justify-end ml-auto">
        <button
          className=" rounded-lg px-4 py-2 w-16 h-13 bg-[#e3e3e3] text-black cursor-pointer hover:bg-[#cecdce] text-lg shadow-2xl"
          onClick={() => setIsOpen(false)}
        >
          Ok
        </button>
      </div>
    </div>
  );
}
export default ColorSelector;
