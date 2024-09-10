import React, { useContext } from "react";
import NavBar from "./components/templates/Nav/NavBar";
import NotifiCation from "./components/templates/NotiSideBar/NotifiCation";
import Home from "./components/pages/home/Home";
import RoutesPath from './routes/RoutesPath'

function App() {
  return (
    <div className="w-full h-screen mx-auto overflow-x-hidden flex flex-col  relative">
      <NavBar />
      <NotifiCation />
      <RoutesPath/>
    </div>
  );
}

export default App;
