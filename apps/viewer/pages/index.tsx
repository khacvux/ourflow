import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "ui";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-red-600">
      <Button></Button>
    </div>
  );
};

export default Home;
