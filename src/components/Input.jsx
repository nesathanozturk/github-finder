import { FiSearch } from "react-icons/fi";

const Input = () => {
  return (
    <form className="flex justify-center items-center relative mt-7">
      <span className="absolute top-5 left-2">
        <FiSearch size={25} className="text-icon" />
      </span>
      <input
        type="text"
        placeholder="Search Github username..."
        className="w-full py-5 pl-10 bg-input rounded-xl border-none font-normal text-white focus:outline-none shadow-md"
      />
      <button
        type="submit"
        className="absolute right-2 bg-btn py-4 px-5 rounded-lg text-white text-xs hover:bg-btnHover transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default Input;
