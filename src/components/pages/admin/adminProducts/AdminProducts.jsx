import React, { useEffect, useState } from "react";
import ItemCards from "../compoItems/Cards/ItemCards";
import { NavLink } from "react-router-dom";
import axiosInstance from "../../../../utils/axios/AxiosConfig";

function AdminProducts() {
  const [response, setresponse] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/product/clint")
      .then((res) => setresponse(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="h-[91.8vh] w-full overflow-y-auto px-5 py-5 flex flex-wrap justify-center  gap-10 relative">
      {response.map((item) => (
        <ItemCards key={item.id} response={item} />
      ))}

      <span className="fixed text-6xl font-bold hover:rotate-180 duration-300 cursor-pointer bottom-2 text-red-500 hover:text-blue-600 bg-orange-400/30 backdrop-blur-sm h-16 w-16 flex justify-center items-center rounded-full">
        <NavLink to={"/dashbord/item/upload"}>
          <i class="ri-add-large-fill"></i>
        </NavLink>
      </span>
    </div>
  );
}

export default AdminProducts;
