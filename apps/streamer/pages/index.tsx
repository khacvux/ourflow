import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "ui";

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-red-600">
      {/* <Button onClick={() => router.push('/about')}></Button> */}
      <button onClick={() => router.push('./about')}>route</button>
    </div>
  );
};

export default Home;
