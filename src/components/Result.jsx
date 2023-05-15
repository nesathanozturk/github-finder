import { AiOutlineTwitter } from "react-icons/ai";
import { BsBuildingsFill } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const Result = () => {
  return (
    <>
      <div className="bg-input py-8 px-8 rounded-xl mt-4">
        <div className="flex justify-between">
          <img
            src="https://avatars.githubusercontent.com/u/107864503?v=4"
            alt="User"
            className="w-28 h-28 mr-3 rounded-full"
          />
          <div className="text-white">
            <h1>Neşathan Öztürk</h1>
            <p className="text-[#295289] mb-4">neşathanöztürk</p>
            <p className="text-sm">This profile has no bio</p>
          </div>
          <h3 className="text-white text-sm">Joined 25 Jan 2011</h3>
        </div>
        <div className="w-[71%] ml-auto py-3 pl-8 pr-12 bg-[#141C2F] flex justify-between items-center text-white rounded-lg">
          <div>
            <p className="text-gray-300 text-xs">Repos</p>
            <h2 className="text-lg font-bold">8</h2>
          </div>
          <div>
            <p className="text-gray-300 text-xs">Followers</p>
            <h2 className="text-lg font-bold">3947</h2>
          </div>
          <div>
            <p className="text-gray-300 text-xs">Following</p>
            <h2 className="text-lg font-bold">9</h2>
          </div>
        </div>
        <div className="w-[71%] ml-auto py-3 pr-12 text-white rounded-lg">
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-3">
              <span>
                <MdLocationOn size={20} />
              </span>
              <span className="text-xs">Trabzon</span>
            </div>
            <div className="flex items-center gap-3">
              <span>
                <AiOutlineTwitter size={20} className="text-gray-400" />
              </span>
              <span className="text-gray-400 text-xs">Not available</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-3">
              <span>
                <HiLink size={20} />
              </span>
              <span className="text-xs">qweqweewq</span>
            </div>
            <div className="flex items-center gap-3">
              <span>
                <BsBuildingsFill size={20} />
              </span>
              <span className="text-xs mr-7">@github</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
