import { AiOutlineTwitter } from "react-icons/ai";
import { BsBuildingsFill } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const ProfileCard = ({ user }) => {
  return (
    <>
      <div className="bg-input py-8 px-8 rounded-xl mt-4 shadow-2xl">
        <div className="flex gap-4">
          <img
            src={user?.avatar_url}
            alt={user?.name}
            className="w-28 h-28 mr-3 rounded-full"
          />
          <div className="text-white">
            <h1 className="text-2xl mb-1">{user.name}</h1>
            <p className="text-[#0273F2] mb-4">@{user?.login}</p>
            <p className="text-sm text-[#C6C9D1] font-medium">
              {user?.bio === null ? "This profile has no bio" : user.bio}
            </p>
          </div>
        </div>
        <div className="w-[71%] ml-auto py-3 pl-8 pr-12 mt-4 bg-[#141C2F] flex justify-between items-center text-white rounded-lg">
          <div>
            <p className="text-gray-300 text-xs">Repos</p>
            <h2 className="text-lg font-bold">{user?.public_repos}</h2>
          </div>
          <div>
            <p className="text-gray-300 text-xs">Followers</p>
            <h2 className="text-lg font-bold">{user?.followers}</h2>
          </div>
          <div>
            <p className="text-gray-300 text-xs">Following</p>
            <h2 className="text-lg font-bold">{user?.following}</h2>
          </div>
        </div>
        <div className="w-[71%] ml-auto py-3 pr-12 text-white rounded-lg">
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-3">
              <span>
                <MdLocationOn
                  size={20}
                  className={`${
                    user?.location === null ? "text-gray-400" : ""
                  }`}
                />
              </span>
              <span className="text-sm">
                {user?.location === null ? "Not available" : user.location}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span>
                <AiOutlineTwitter
                  size={20}
                  className={`${
                    user?.twitter_username === null ? "text-gray-400" : ""
                  }`}
                />
              </span>
              <span className="text-gray-400 text-sm">
                {user?.twitter_username === null
                  ? "Not available"
                  : user.twitter_username}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-3">
              <span>
                <HiLink
                  size={20}
                  className={`${
                    user?.html_url === null ? "text-gray-400" : ""
                  }`}
                />
              </span>
              <a href={user?.html_url} className="text-xs hover:underline">
                {user?.html_url === null ? "Not available" : user.html_url}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span>
                <BsBuildingsFill
                  size={20}
                  className={`${user.company === null ? "text-gray-400" : ""}`}
                />
              </span>
              <span
                className={`text-sm whitespace-nowrap ${
                  user.company === null ? "text-gray-400" : ""
                }`}
              >
                {user?.company === null ? "Not available" : user.company}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
