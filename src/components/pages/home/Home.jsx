import React from "react";
import SideBar from "../../templates/SideBar/SideBar";
import MainContent from "../mainContent/MainContent";

function Home() {
  document.title = "Home";
  return (
    <div className="flex  ">
      <MainContent />
    </div>
  );
}

export default Home;
