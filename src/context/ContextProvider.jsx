import React, { useEffect, useState } from "react";
import ContextMaker from "./ContextMaker";

const ContextProvider = ({ children }) => {
  const [notibar, setnotibar] = useState(false);
  const [sidebarHam, setsidebarHam] = useState(true);
  const [uploadDataReloade, setuploadDataReloade] = useState();
  const [sidebar, setsidebar] = useState(false);
  return (
    <ContextMaker.Provider
      value={{
        notibar,
        setnotibar,
        sidebar,
        setsidebar,
        sidebarHam,
        setsidebarHam,
        uploadDataReloade,
        setuploadDataReloade,
      }}
    >
      {children}
    </ContextMaker.Provider>
  );
};

export default ContextProvider;
