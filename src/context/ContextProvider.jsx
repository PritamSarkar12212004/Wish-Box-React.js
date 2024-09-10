import React, { useEffect, useState } from "react";
import ContextMaker from "./ContextMaker";

const ContextProvider = ({ children }) => {
  const [notibar, setnotibar] = useState(false);
  const [sidebar,setsidebar]=useState(false);
  return (
    <ContextMaker.Provider value={{ notibar, setnotibar,sidebar,setsidebar }}>
      {children}
    </ContextMaker.Provider>
  );
};

export default ContextProvider;
