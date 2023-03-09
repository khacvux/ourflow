import { useRouter } from "next/router";
import React from "react";
import LazyList from "ui/components/category-lives/LazyList";
import Header from "ui/components/headers/Header";
import SidebarLayout from "ui/components/layouts/SidebarLayout";
import ViewerSidebar from "ui/components/sidebars/ViewerSidebar";
import UserWall from "ui/components/user/UserWall";

interface props {}

function Wall({}: props) {
  const router = useRouter();
  const { uid } = router.query;

  return (
    <SidebarLayout>
      <ViewerSidebar />
      <div className="w-full overflow-scroll">
        <UserWall
          background="https://images.hdqwalls.com/wallpapers/anime-original-art-4k-x0.jpg"
          avatar="https://i.pinimg.com/564x/7f/f0/98/7ff09865a447a5231fc04cf034bb23a1.jpg"
          uid={uid}
          name="bagaga"
          followers={12312}
          followings={234}
          followed={true}
        />
        <div className="px-[50px] mt-[40px]">
          <LazyList title="Replay" />
        </div>
      </div>
    </SidebarLayout>
  );
}

export default Wall;

Wall.getLayout = function PageLayout() {
  return (
    <>
      <Header />
      <Wall />
    </>
  );
};
