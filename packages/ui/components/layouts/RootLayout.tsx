import { JSXElementConstructor } from "react";

type Key = string | number;

interface ReactElement<
  P = any,
  T extends string | JSXElementConstructor<any> =
    | string
    | JSXElementConstructor<any>
> {
  type: T;
  props: P;
  key: Key | null;
}

function RootLayout(children: any) {
  return <div className="w-screen h-screen bg-blue-700 flex flex-col">{children}ds</div>;
}

export default RootLayout;
