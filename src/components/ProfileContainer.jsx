import { setSearchValue, getUser } from "../store/slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import Input from "./Input";

const ProfileContainer = ({ toggleTheme }) => {
  const dispatch = useDispatch();

  const { users, searchValue } = useSelector((state) => state.profile);

  const handleSearchValue = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.trim() === "") {
      alert("Please enter a username");
    } else {
      dispatch(getUser(searchValue));
      dispatch(setSearchValue(""));
    }
  };

  return (
    <>
      <div className="w-[600px]">
        <Header toggleTheme={toggleTheme} />
        <Input
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearchValue={handleSearchValue}
          handleSubmit={handleSubmit}
        />
        <ProfileCard user={users} />
      </div>
    </>
  );
};

export default ProfileContainer;
