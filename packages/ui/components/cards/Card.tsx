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

function Card({ streamerBanner, title, name, category, avatar, sid }: props) {
  const router = useRouter();

  const handleNavigate = useCallback(() => {
    router.push("/lives/"+ sid);
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
        <img
          alt="Kent Dodds"

          src={avatar}
          className="bg-inherit rounded-full w-[56px] h-[56px]"
        />
        <div className=" w-full bg-inherit">
          <Heading
            as="h5"
            size="md"
            color="white"
            className=" w-5/6 cursor-pointer truncate bg-inherit hover:text-[#5EC2EA]"
          >
            {title}
          </Heading>
          <b className=" cursor-pointer bg-inherit text-sm text-[#666666]">
            {name}
          </b>
          <div className=" w-full flex h-[25px] flex-row items-center justify-between bg-inherit">
            <div className="flex flex-row items-center space-x-2">
              {/* {category} */}
              <div className="cursor-pointer rounded-sm bg-[#323232] py-[0.5px] px-2 ">
                <p className="bg-inherit text-sm font-medium text-[#AAAAAA] hover:text-white">
                  Category
                </p>
              </div>
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

export default Card;
