import { ReactElement } from "react";

interface props {
  children?: ReactElement | ReactElement[];
}

function SidebarLayout({ children }: props) {
  return (
    <div className="flex w-full flex-1 flex-row overflow-hidden h-[calc(100vh-56px)]">
      {children}
    </div>
  );
}

export default SidebarLayout;
