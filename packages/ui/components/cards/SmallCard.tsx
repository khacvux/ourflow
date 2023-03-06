import { Avatar, Heading, Img } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface props {
  sid: string;
  streamerBanner: string;
  title: string;
  name: string;
  avatar: string;
  category?: string[];
}

function SmallCard({
  streamerBanner,
  title,
  name,
  category,
  avatar,
  sid,
}: props) {
  const router = useRouter();

  const handleNavigate = useCallback(() => {
    router.push("/lives/" + sid);
  }, []);

  return (
    <div className="flex h-full w-full flex-col bg-[#191919]">
      <Img
        src={streamerBanner}
        alt="poster"
        className="h-[218px] w-full object-cover"
        onClick={handleNavigate}
      />
      <div className="flex flex-1 flex-row items-center space-x-4 bg-inherit px-3 ">
        <div className=" w-full bg-inherit">
          <Heading
            as="h5"
            size="md"
            color="white"
            className=" w-5/6 cursor-pointer truncate bg-inherit hover:text-[#5EC2EA]"
          >
            {title}
          </Heading>

          <div className=" flex h-[25px] w-full flex-row items-center justify-between bg-inherit mt-3">
            <div className="flex flex-row items-center space-x-3 bg-inherit">
              <img
                alt="Kent Dodds"
                src={avatar}
                className="h-[30px] w-[30px] rounded-full bg-inherit"
              />
              <b className=" cursor-pointer bg-inherit text-sm text-[#666666]">
                {name}
              </b>
            </div>
            <div className="cursor-default space-x-1 !bg-inherit">
              <ViewIcon
                className=" !bg-inherit "
                color="#A2A2A2"
                fontSize="sm"
              />
              <span className=" bg-inherit text-xs font-medium text-[#A2A2A2]">
                23.2k
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
