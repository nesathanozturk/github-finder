import ProfileContainer from "./components/ProfileContainer";
import { setTheme } from "./store/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);

  const toggleTheme = () => {
    dispatch(setTheme(!theme));
    localStorage.setItem("theme", !theme);
  };

  return (
    <main className={theme ? "dark" : "light"}>
      <div className="px-4 h-screen flex justify-center items-center bg-light dark:bg-dark sm:px-0">
        <ProfileContainer toggleTheme={toggleTheme} />
      </div>
    </main>
  );
};

export default App;
