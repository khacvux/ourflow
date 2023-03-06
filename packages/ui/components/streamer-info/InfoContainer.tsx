import { ReactElement } from "react";

interface props {
  children?: ReactElement | ReactElement[];
}

function InfoContainer({ children }: props) {
  return <div className="w-full p-[20px] bg-[#1A1A1A] my-10 rounded-md">{children}</div>;
}

export default InfoContainer;
