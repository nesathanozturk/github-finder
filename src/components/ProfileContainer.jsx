import { setSearchValue, getUser } from "../store/slices/profileSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import Input from "./Input";

const ProfileContainer = () => {
  const dispatch = useDispatch();

  const { users, searchValue } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleSearchValue = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUser(searchValue));
    dispatch(setSearchValue(""));
  };

  return (
    <div className="w-[600px]">
      <Header />
      <Input
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchValue={handleSearchValue}
        handleSubmit={handleSubmit}
      />
      <ProfileCard user={users} />
    </div>
  );
};

export default ProfileContainer;
