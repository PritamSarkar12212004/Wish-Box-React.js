import React, { useContext } from "react";
import NavBar from "./components/templates/Nav/NavBar";
import NotifiCation from "./components/templates/NotiSideBar/NotifiCation";
import RoutesPath from "./routes/RoutesPath";
import SideHamBar from "./components/templates/responsive/sideHamBar/SideHamBar";
import AuthRoute from './routes/AuthRoute'

function App() {
  return (
    <div className="w-full h-screen mx-auto overflow-x-hidden flex flex-col  relative">
      <NavBar />
      <NotifiCation />
      <SideHamBar />
      <RoutesPath />
      <AuthRoute/>
    </div>
  );
}

export default App;
