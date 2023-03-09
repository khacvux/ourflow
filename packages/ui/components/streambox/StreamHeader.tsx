import { AddIcon, LinkIcon } from "@chakra-ui/icons";
import { convertNumber } from 'common'
interface props {
  title: string;
  streamerName: string;
  watching: number;
  totalFollowers: number;
  streamerId: string;
}

/**
 * Returns the average of two numbers.
 *
 * @param title - Title of stream
 * @param streamerName - Name of streamer
 * @param watching - number of people watching
 * @param totalFollowers - number of total following
 * @param streamerId - streamer id
 */
function StreamHeader(props: props) {

  return (
    <div className=" flex h-[80px] w-full flex-row items-center space-x-3 rounded-t-md bg-[#1A1A1A] p-3 transition-all">
      <img
        src="https://i.pinimg.com/564x/f6/b0/d1/f6b0d1854ef33e59a12b96072a718264.jpg"
        alt="streamer-avatar"
        className="h-[60px] w-[60px] rounded-md bg-inherit"
      />
      <div className=" flex h-full w-full flex-col bg-inherit">
        <div className="flex flex-1 flex-row items-start justify-between bg-inherit py-1">
          <h2 className=" bg-inherit text-2xl font-bold text-white">
            {props.title}
          </h2>
          <div className="flex flex-row items-center  space-x-2 bg-inherit">
            <button
              className=" flex flex-row items-center space-x-2 rounded-md
            border border-blue-600 !bg-blue-600 bg-inherit  px-3 py-1 font-medium text-white outline-none"
            >
              <AddIcon className=" bg-inherit" color="white" />
              <p className=" bg-inherit text-sm">Follow</p>
            </button>
            <button
              className=" flex flex-row items-center space-x-2 rounded-md
            border border-[#A3A3A3] bg-inherit  px-3 py-1 font-medium text-white outline-none"
            >
              <LinkIcon className=" bg-inherit" color="#A3A3A3" />
              <p className=" bg-inherit text-sm text-[#A3A3A3]">Share</p>
            </button>
          </div>
        </div>
        <div className="flex w-full flex-row items-center space-x-5 bg-inherit">
          <p className=" rounded-md bg-inherit !bg-blue-600 px-3 text-sm font-semibold text-white ">
            {props.streamerName}
          </p>
          <p className=" bg-inherit text-sm font-light text-[#A3A3A3] ">
            followers: {convertNumber(props.totalFollowers)}
          </p>
          <p className=" bg-inherit text-sm font-light text-[#A3A3A3] ">
            watching: {convertNumber(props.watching)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StreamHeader;
