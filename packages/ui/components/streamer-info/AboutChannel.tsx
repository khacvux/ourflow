import { convertNumber } from "common";

interface props {
  streamerId: string;
  streamerName: string;
  followers: number;
  about: string;
  avatar: string;
}

/**
 * Returns the average of two numbers.
 *
 * @param about - string
 * @param streamerName - Name of streamer
 * @param followers - number of total followers
 * @param streamerId - streamer id
 * @param avatar - image url
 */
function AboutChannel(props: props) {
  return (
    <div className="flex w-full flex-col bg-inherit ">
      <div className="flex flex-row items-center justify-start space-x-[20px] bg-inherit px-[28px] pt-[10px]">
        <img
          src={props.avatar}
          alt="streamer-avatar"
          className=" h-[90px] w-[90px] rounded-full bg-inherit"
        />
        <div className="flex flex-1 flex-col justify-start bg-inherit">
          <h1 className="bg-inherit text-2xl font-semibold text-white ">
            {props.streamerName}
          </h1>
          <p className="bg-inherit text-base font-light text-white">
            followers: {convertNumber(props.followers)}
          </p>
        </div>
      </div>
      <div className="bg-inherit px-[28px] pt-[16px] pb-[34px] text-white">
        <div className="bg-[#1E1E1E] px-[26px] py-[15px] rounded-md">{props.about}</div>
      </div>
    </div>
  );
}

export default AboutChannel;
