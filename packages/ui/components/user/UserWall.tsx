import { background } from "@chakra-ui/react";
import { convertNumber } from "common";

interface props {
  avatar?: string;
  background?: string;
  uid: string | string[] | undefined;
  name: string;
  followers: number;
  followings: number;
  followed: Boolean;
}
/**
 * @param avatar - string
 * @param background - string
 * @param uid: string;
 * @param name: string;
 * @param followers: number;
 * @param followings: number;
 * @param followed: Boolean;
 *
 */
function UserWall({
  avatar,
  background = "https://i.pinimg.com/564x/f4/f7/ab/f4f7abc5c236c7112e36380a2ac5d9a0.jpg",
  uid,
  name,
  followers,
  followings,
  followed,
}: props) {
  return (
    <div className=" flex w-full flex-1 flex-col">
      <div className="w-full">
        <img
          src={background}
          alt="bg"
          className="h-[240px] w-full flex-1 object-cover"
        />
      </div>
      <div className="mt-3 flex w-full flex-row items-start space-x-8 px-[80px]">
        <div className="flex flex-col items-center">
          <img
            src={avatar}
            alt="avatar"
            className="abs h-[120px] w-[120px] rounded-full border-4 border-stone-300/20"
          />
          <button className="mt-5 w-[100px] rounded-md bg-blue-500 py-1 text-white outline-none">
            Follow
          </button>
        </div>
        <div className="mt-5 flex flex-col items-start ">
          <p className="text-white/50">UID: {uid}</p>
          <h3 className="text-3xl text-white">{name}</h3>
          <div className="mt-5 flex flex-row items-center space-x-10 text-sm text-white">
            <div>
              <p>Followings</p>
              <span className="text-3xl">{convertNumber(followings)}</span>
            </div>
            <div className="h-10 w-[2px] rounded-3xl bg-white/30" />
            <div>
              <p>Followers</p>
              <span className="text-3xl">{convertNumber(followers)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserWall;
