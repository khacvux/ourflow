import React from "react";
import LazyList from "ui/components/category-lives/LazyList";
import Header from "ui/components/headers/Header";
import SidebarLayout from "ui/components/layouts/SidebarLayout";
import ViewerSidebar from "ui/components/sidebars/ViewerSidebar";

function Lives() {
  return (
    <SidebarLayout>
      <ViewerSidebar />
      <LazyList title="Streaming" />
    </SidebarLayout>
  );
}

export default Lives;

Lives.getLayout = function PageLayout() {
  return (
    <>
      <Header />
      <Lives />
    </>
  );
};
