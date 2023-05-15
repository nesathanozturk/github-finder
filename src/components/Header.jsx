import { HiSun } from "react-icons/hi";

const Header = () => {
  return (
    <header className="flex justify-between items-center text-white">
      <h1 className="text-2xl font-semibold">devfinder</h1>
      <div className="flex justify-center items-center gap-1.5">
        <span className="uppercase text-xs font-semibold tracking-widest">
          Light
        </span>
        <span>
          <HiSun size={18} />
        </span>
      </div>
    </header>
  );
};

export default Header;
