import {
  StarIcon,
  WarningIcon,
  ChevronLeftIcon,
  DragHandleIcon,
} from "@chakra-ui/icons";
import { useCallback, useEffect, useState, memo } from "react";
import { useAppearanceStore } from "stores";

interface navProps {
  isSmall: Boolean;
}

function ViewerSidebar() {
  const appearanceStore = useAppearanceStore();
  const [isSmall, setSmall] = useState<Boolean>(false);

  const handleResize = useCallback(() => {
    appearanceStore.setSmall();
  }, []);

  useEffect(() => {
    setSmall(appearanceStore.small);
  }, [appearanceStore.small]);

  return (
    <div className={`${isSmall ? `w-[50px]` : `w-[220px]`}`}>
      <div
        className={` fixed h-[calc(100vh-56px)] bg-[#1A1A1A] px-2 py-4
      ${isSmall ? `w-[50px]` : `w-[220px]`} `}
      >
        <button
          className=" absolute -right-4 bottom-1/2 cursor-pointer rounded-r-lg bg-inherit py-3 px-[1px]"
          onClick={handleResize}
        >
          <ChevronLeftIcon
            className={`bg-inherit text-lg ${isSmall ? ` rotate-180` : ``} `}
            color="#A3A3A3"
          />
        </button>
        <NavItems isSmall={isSmall} />
      </div>
    </div>
  );
}

export default ViewerSidebar;

const NavItems = memo(function NavItems({ isSmall }: navProps) {
  return (
    <div className="space-y-5 bg-inherit">
      <div
        className="flex w-full cursor-pointer flex-row items-center justify-start
            space-x-3 rounded-md bg-inherit px-2 py-[1px] hover:bg-[#323232]"
      >
        <StarIcon color="#A3A3A3" className="my-1 bg-inherit text-xl" />
        {isSmall ? (
          <></>
        ) : (
          <p className=" bg-inherit text-lg font-medium text-[#A3A3A3]">
            Following
          </p>
        )}
      </div>
      <div
        className="flex w-full cursor-pointer flex-row items-center justify-start
            space-x-3 rounded-md bg-inherit px-2 py-[1px] hover:bg-[#323232]"
      >
        <WarningIcon color="#A3A3A3" className="my-1 bg-inherit text-xl" />
        {isSmall ? (
          <></>
        ) : (
          <p className=" bg-inherit text-lg font-medium text-[#A3A3A3]">
            Shops
          </p>
        )}
      </div>
    </div>
  );
});
