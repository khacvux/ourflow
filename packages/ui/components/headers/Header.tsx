import SearchInput from "./SearchInput";
import Link from "next/link";

interface IRoute {
  routeName: string;
  path: string;
}
const routes: IRoute[] = [
  { routeName: "Home", path: "/" },
  { routeName: "Streaming", path: "/streaming" },
];

function Header() {
  return (
    <div className="  h-[56px] w-full  ">
      <div className="fixed flex h-[56px] w-full flex-row items-center justify-between bg-[#1A1A1A] px-[25px] py-[12px]">
        <ul className=" flex flex-row items-center space-x-[30px] bg-inherit">
          {routes.map((item: IRoute, index) => (
            <li
              className=" cursor-pointer bg-inherit text-[#9E9E9E] hover:text-white"
              key={index}
            >
              <Link href={item.path} className=" bg-inherit">
                {item.routeName}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center space-x-4 bg-inherit">
          <SearchInput />
          <img
            alt="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            className="cursor-pointer rounded-full bg-inherit"
            width="40"
            height="40"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
