import React, { useEffect, useState } from "react";
import Cards from "../../templates/Card/Cards";
import Footer from "../Footer/Footer";
import PopUp from "../../auth/PopUpWindow/PopUp";
import axiosInstance from "../../../utils/axios/AxiosConfig";
import LoadingProduct from "../../loading/LoadingProduct";
function MainContent() {
  const [popUp, setpopUp] = useState(false);
  const [close, setclose] = useState(false);
  const [response, setresponse] = useState([]);
  const popAuth = () => {
    {
      localStorage.getItem("userData") ? null : setpopUp(true);
    }
    setclose(!close);
  };
  useEffect(() => {
    axiosInstance
      .get("/product/clint")
      .then((res) => setresponse(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-[100vw] h-[91.7vh] md:px-4   flex   justify-center flex-col     ">
      {response.length === 0 ? (
        <LoadingProduct />
      ) : (
        <>
          {popUp ? <PopUp setpopUp={setpopUp} popUp={popUp} /> : null}
          <div className="w-full h-full flex flex-wrap overflow-y-auto  justify-center md:gap-5 gap-4">
            {response.map((item, index) => (
              <Cards key={index} img={item} popAuth={popAuth} response={item} />
            ))}
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default MainContent;
