import { memo } from "react";
import ChatList from "./ChatList";
import InputChat from "./InputChat";

function SideContainer() {
  return (
    <div
      className=" my-2 mx-2 flex h-[calc(100%-1rem)] flex-col items-center justify-between
      overflow-hidden !rounded-md bg-[#1E1E1E] lg:w-[350px]"
    >
      <ChatList />
      <InputChat />
    </div>
  );
}

export default memo(SideContainer);
