import { Search } from "lucide-react";
function SearchBar({ setSearchText }) {
  return (
    <div className="mt-3 w-full mr-auto ml-auto">
      <div className="px-2 flex items-center bg-white/20 backdrop-blur-md shadow-md rounded-full">
        <input
          className="rounded-l-sm w-full py-2 px-6 text-gray-700 text-lg focus:outline-none"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value) }
        />
        <div className="p-2">
          <button className="bg-[#a6138d] text-white rounded-full p-2 hover:bg-[#d428b8] focus:outline-none w-12 h-12 flex items-center justify-center shadow-lg cursor-pointer">
            <Search />
          </button>
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
