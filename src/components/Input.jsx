import { FiSearch } from "react-icons/fi";

const Input = ({
  searchValue,
  setSearchValue,
  handleSearchValue,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center relative mt-7"
    >
      <span className="absolute top-4 left-2 sm:top-5 sm:left-4">
        <FiSearch size={25} className="text-icon" />
      </span>
      <input
        type="text"
        placeholder="Search Github username..."
        theme
        className="w-full py-5 pl-10 sm:pl-14 rounded-xl text-xs sm:text-base bg-white text-primary border-none font-normal focus:outline-none shadow-xl dark:bg-input dark:text-white"
        value={searchValue}
        onChange={handleSearchValue}
      />
      <button
        type="submit"
        className="absolute right-2 bg-btn p-3 sm:py-4 sm:px-5 rounded-lg text-white text-[0.60rem] sm:text-xs hover:bg-btnHover transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default Input;
