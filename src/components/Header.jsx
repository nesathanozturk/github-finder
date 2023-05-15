import { BsFillMoonFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";
import { useSelector } from "react-redux";

const Header = ({ toggleTheme }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <header className="flex justify-between items-center text-primary dark:text-white">
      <h1 className="text-2xl font-semibold">devfinder</h1>
      <div className="flex justify-center items-center gap-3">
        <span
          className="uppercase text-xs font-semibold tracking-widest cursor-pointer"
          onClick={toggleTheme}
        >
          {theme ? "Light" : "Dark"}
        </span>
        <span>
          {theme ? <HiSun size={18} /> : <BsFillMoonFill size={18} />}
        </span>
      </div>
    </header>
  );
};

export default Header;
