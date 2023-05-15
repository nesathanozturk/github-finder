import { AiOutlineTwitter } from "react-icons/ai";
import { BsBuildingsFill } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";

const ProfileCard = ({ user }) => {
  const { users } = useSelector((state) => state.profile);

  return (
    <>
      <div className="bg-white p-8 rounded-xl mt-4 shadow-2xl dark:bg-input">
        {users?.length < 1 ? (
          <div className="flex justify-center items-center h-48">
            <p className="text-lg sm:text-2xl text-gray-400">No user</p>
          </div>
        ) : (
          <>
            <div className="flex gap-2 sm:gap-4">
              <img
                src={user?.avatar_url}
                alt={user?.name}
                className="w-20 h-20 sm:w-28 sm:h-28 mr-3 rounded-full"
              />
              <div className="text-white">
                <h1 className="text-lg sm:text-2xl mb-1 font-semibold text-black dark:text-white">
                  {user.name}
                </h1>
                <p className="text-sm text-icon mb-4">@{user?.login}</p>
                <p className="hidden font-medium text-sm text-alt dark:text-darkAlt sm:block">
                  {user?.bio === null ? "This profile has no bio" : user.bio}
                </p>
              </div>
            </div>
            <p className="my-5 font-medium text-sm text-alt dark:text-darkAlt sm:hidden">
              {user?.bio === null ? "This profile has no bio" : user.bio}
            </p>
            <div className="py-3 mt-4 flex gap-4 justify-center items-center bg-light text-white text-center rounded-lg dark:bg-darkContainer sm:text-left sm:w-[71%] sm:ml-auto sm:pl-8 sm:pr-12 sm:justify-between sm:gap-0">
              <div>
                <p className="text-primary dark:text-gray-300 text-xs mb-2">
                  Repos
                </p>
                <h2 className="text-xl font-bold text-black dark:text-white">
                  {user?.public_repos}
                </h2>
              </div>
              <div>
                <p className="text-primary dark:text-gray-300 text-xs mb-2">
                  Followers
                </p>
                <h2 className="text-xl font-bold text-black dark:text-white">
                  {user?.followers}
                </h2>
              </div>
              <div>
                <p className="text-primary dark:text-gray-300 text-xs mb-2">
                  Following
                </p>
                <h2 className="text-xl font-bold text-black dark:text-white">
                  {user?.following}
                </h2>
              </div>
            </div>
            <div className="py-3 sm:flex gap-6 text-white rounded-lg sm:w-[71%] sm:ml-auto sm:pr-12">
              <div className="sm:w-1/2 sm:flex flex-col mt-4 gap-5">
                <div className="flex items-center gap-3 mb-4 sm:mb-0">
                  <span>
                    <MdLocationOn
                      size={20}
                      className={`${
                        user?.location === null
                          ? "text-gray-400"
                          : "text-primary dark:text-white"
                      }`}
                    />
                  </span>
                  <span
                    className={`text-sm ${
                      user?.location === null
                        ? "text-gray-400"
                        : "text-primary dark:text-white"
                    }`}
                  >
                    {user?.location === null ? "Not available" : user.location}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3 sm:mb-0">
                  <span>
                    <HiLink
                      size={20}
                      className={`${
                        user?.html_url === null
                          ? "text-gray-400"
                          : "text-primary dark:text-white"
                      }`}
                    />
                  </span>
                  <a
                    href={user?.html_url}
                    className={`text-xs hover:underline ${
                      user?.location === null
                        ? "text-gray-400"
                        : "text-primary dark:text-white"
                    }`}
                  >
                    {user?.html_url === null ? "Not available" : user.html_url}
                  </a>
                </div>
              </div>
              <div className="sm:w-1/2 sm:flex flex-col mt-4 gap-5">
                <div className="flex items-center gap-3 mb-4 sm:mb-0">
                  <span>
                    <AiOutlineTwitter
                      size={20}
                      className={`${
                        user?.twitter_username === null
                          ? "text-gray-400"
                          : "text-primary dark:text-white"
                      }`}
                    />
                  </span>
                  <span
                    className={`text-sm ${
                      user?.twitter_username === null
                        ? "text-gray-400"
                        : "text-primary dark:text-white"
                    }`}
                  >
                    {user?.twitter_username === null
                      ? "Not available"
                      : user.twitter_username}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span>
                    <BsBuildingsFill
                      size={20}
                      className={`${
                        user.company === null
                          ? "text-gray-400"
                          : "text-primary dark:text-white"
                      }`}
                    />
                  </span>
                  <span
                    className={`text-sm whitespace-nowrap ${
                      user.company === null
                        ? "text-gray-400"
                        : "text-primary dark:text-white"
                    }`}
                  >
                    {user?.company === null ? "Not available" : user.company}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProfileCard;
