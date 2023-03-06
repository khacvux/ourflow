import { useRouter } from "next/router";
import { ReactElement } from "react";
import MediumList from "ui/components/category-lives/MediumList";
import SmallCardList from "ui/components/category-lives/SmallCardList";
import SideContainer from "ui/components/chatbox/SideContainer";
import Header from "ui/components/headers/Header";
import SidebarLayout from "ui/components/layouts/SidebarLayout";
import ViewerSidebar from "ui/components/sidebars/ViewerSidebar";
import SendGift from "ui/components/streambox/SendGift";
import StreamerContainer from "ui/components/streambox/StreamerContainer";
import StreamHeader from "ui/components/streambox/StreamHeader";
import StreamVideo from "ui/components/streambox/StreamVideo";
import AboutChannel from "ui/components/streamer-info/AboutChannel";
import InfoContainer from "ui/components/streamer-info/InfoContainer";

interface props {}

function StreamerPage({}: props) {
  const router = useRouter();
  const { sid } = router.query;

  return (
    <SidebarLayout>
      <ViewerSidebar />
      <SidebarLayout>
        <StreamerContainer>
          <StreamHeader
            title="test title"
            streamerId="2342"
            watching={234}
            totalFollowers={23423499}
            streamerName="Baga"
          />
          <StreamVideo />
          <SendGift />
          <InfoContainer>
            <AboutChannel
              about="Stream từ đây đến 70 tuổi <3


              Fb Cá nhân : https://www.facebook.com/khoa.phuoc.3
              Page : https://www.facebook.com/TUITENBO1996
              Group : https://www.facebook.com/groups/nhakhoahoc
              Discord : https://discord.gg/Kxqr9TcRw8
              Youtube :https://www.youtube.com/c/TUITÊNBÔ"
              streamerId="dajshdoiqw"
              followers={23423}
              streamerName="Baga"
              avatar="https://i.pinimg.com/736x/d8/4a/f8/d84af84f4c2f57a32d592169eeeb05c5.jpg"
            />
          </InfoContainer>
          <SmallCardList title="Suggested for you" />
        </StreamerContainer>

        <SideContainer />
      </SidebarLayout>
    </SidebarLayout>
  );
}

export default StreamerPage;

StreamerPage.getLayout = function PageLayout() {
  return (
    <>
      <Header />
      <StreamerPage />
    </>
  );
};
