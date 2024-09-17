import axios from "axios";
import axiosInstance from "../../../../utils/axios/AxiosConfig";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Loading from "../../../loading/Loading";

function AdminItemUpload() {
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  const [backendResponse, setBackednResponse] = useState();
  const reciveBackedData = (data) => {
    setBackednResponse(data.data[0]);
    reset();
    navigate("/dashbord/adminproducts");
  };
  const { register, handleSubmit, reset } = useForm();
  const [imageList, setImageList] = useState([]);
  const handleFormSubmission = async (infos) => {
    setloader(true);
    if (imageList.length === 0) return;
    const uploadPromises = imageList.map((image) => {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "Wish_box_Store");
      data.append("cloud_name", "dpstw5idt");
      return axios.post(
        "https://api.cloudinary.com/v1_1/dpstw5idt/image/upload",
        data
      );
    });

    try {
      const responses = await Promise.all(uploadPromises);
      const uploadedImageURLs = responses.map(
        (response) => response.data.secure_url
      );
      axiosInstance
        .post("/upload/product", { infos, uploadedImageURLs })
        .then((response) => reciveBackedData(response));
      console.log("Uploaded URLs: ", uploadedImageURLs);
    } catch (err) {
      console.error("Error uploading images:", err);
    }
  };
  const handleImageChange = (e, index) => {
    const files = e.target.files;
    if (files.length > 0) {
      let updatedImages = [...imageList];
      updatedImages[index] = files[0];
      setImageList(updatedImages);
    }
  };

  return (
    <div className="w-full h-[91.8vh] overflow-y-auto flex justify-center relative">
      {loader ? <Loading /> : null}
      <form
        className="lg:w-[60%] md:w-[70%] w-full sm:px-3 md:px-0 flex flex-col"
        onSubmit={handleSubmit(handleFormSubmission)}
      >
        <span className="w-full flex md:flex-row flex-wrap justify-around md:h-28 sm:h-24">
          {["First", "Second", "Third", "Fourth", "Fifth"].map(
            (label, index) => (
              <label key={index} htmlFor={`img${index}`}>
                <span
                  className={`md:text-7xl text-9xl font-extralight flex flex-col items-center justify-center cursor-pointer ${
                    index === 0
                      ? "text-blue-600"
                      : index === 1
                      ? "text-orange-600"
                      : index === 2
                      ? "text-red-600"
                      : index === 3
                      ? "text-yellow-600"
                      : ""
                  }`}
                >
                  <i className="ri-upload-cloud-line"></i>{" "}
                  <h1 className="lg:text-lg  md:text-sm  text-sm ">
                    {label} Image
                  </h1>
                </span>
                <input
                  type="file"
                  className="hidden"
                  id={`img${index}`}
                  onChange={(e) => handleImageChange(e, index)}
                />
              </label>
            )
          )}
        </span>

        {/* Input fields for other data */}
        <div className="mt-3 w-full flex lg:justify-between items-center flex-wrap md:justify-start md:gap-3 md:px-0 px-4 md:py-0 py-3 justify-center  gap-5 sm:mt-20 ">
          <input
            type="text"
            required
            placeholder="Item Name"
            className="h-10 px-3 border-[1px] border-zinc-500 rounded-xl capitalize"
            {...register("ProductName")}
          />
          <input
            type="number"
            required
            placeholder="Price"
            className="h-10 px-3 border-[1px] border-zinc-500 rounded-xl capitalize"
            {...register("ProductPrice")}
          />
          <select
            className="h-10 px-3 border-[1px] border-zinc-500 rounded-xl capitalize w-36"
            {...register("ProductCategory")}
          >
            <option value="Kite">Kite</option>
            <option value="PomPom">PomPom</option>
            <option value="Pataka">Pataka</option>
            <option value="3D_paper_hangings">3D paper hangings</option>
            <option value="Paper_Hangings">Paper Hangings</option>
            <option value="paper_Garlands">paper Garlands</option>
            <option value="Pataka_buntings">Pataka buntings</option>
            <option value="Paper_fans">Paper fans</option>
            <option value="Paper_flowers">Paper flowers</option>
            <option value="Tissue_Pom_poms">Tissue Pom poms</option>
            <option value="THoneycomb_balls_Decore">
              Honeycomb balls Decore
            </option>
          </select>
          <input
            required
            type="text"
            placeholder="Length"
            className="text-sm h-10 px-3 md:w-16  border-[1px] border-zinc-500 rounded-xl capitalize"
            {...register("ProductLength")}
          />
          <input
            type="text"
            required
            placeholder="Width"
            className="text-sm h-10 px-3 md:w-16 border-[1px] border-zinc-500 rounded-xl capitalize"
            {...register("ProductWidth")}
          />
        </div>

        {/* Description input */}
        <span className="w-full flex justify-center mt-5 items-center">
          <textarea
            required
            className="md:w-[80%] w-[90%] h-80 border-[1px] border-zinc-400 rounded-xl outline-none px-2 py-2 capitalize"
            placeholder="Description"
            {...register("ProductDescription")}
          ></textarea>
        </span>

        {/* Submit button */}
        <span className="w-full flex justify-center items-center">
          <button
            className="md:px-3 md:py-2 px-10 py-3 bg-blue-500 rounded text-white mt-5 hover:bg-blue-600 hover:scale-105 duration-300"
            type="submit"
          >
            Upload <i className="ri-upload-cloud-2-line"></i>
          </button>
        </span>
      </form>
    </div>
  );
}

export default AdminItemUpload;
