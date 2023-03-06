import { ReactElement } from "react";

interface props {
  children?: ReactElement | ReactElement[];
}

function StreamerContainer({ children }: props) {
  return <div className=" w-full py-2 pl-6 overflow-scroll ">{children}</div>;
}

export default StreamerContainer;
