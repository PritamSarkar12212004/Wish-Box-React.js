import axios from "axios";
import axiosInstance from "../../../../utils/axios/AxiosConfig";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function AdminItemUpload() {
  const [backendResponse, setBackednResponse] = useState();
  const reciveBackedData = (data) => {
    console.log(data.data[0]);
  };
  const { register, handleSubmit, reset } = useForm();
  const [imageList, setImageList] = useState([]);
  const handleFormSubmission = async (infos) => {
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
      reset();
      console.log("Uploaded URLs: ", urls);
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
    <div className="w-full h-[91.8vh] overflow-y-auto flex justify-center">
      <form className="w-[60%]" onSubmit={handleSubmit(handleFormSubmission)}>
        <span className="w-full flex justify-between h-28">
          {["First", "Second", "Third", "Fourth", "Fifth"].map(
            (label, index) => (
              <label key={index} htmlFor={`img${index}`}>
                <span
                  className={`text-7xl font-extralight flex flex-col items-center justify-center cursor-pointer ${
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
                  <h1 className="text-lg">{label} Image</h1>
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
        <div className="mt-3 w-full flex justify-between items-center">
          <input
            type="text"
            placeholder="Item Name"
            className="h-10 px-3 border-[1px] border-zinc-500 rounded-xl capitalize"
            {...register("ProductName")}
          />
          <input
            type="number"
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
          </select>
          <input
            type="text"
            placeholder="Length"
            className="text-sm h-10 px-3 w-16 border-[1px] border-zinc-500 rounded-xl capitalize"
            {...register("ProductLength")}
          />
          <input
            type="text"
            placeholder="Width"
            className="text-sm h-10 px-3 w-16 border-[1px] border-zinc-500 rounded-xl capitalize"
            {...register("ProductWidth")}
          />
        </div>

        {/* Description input */}
        <span className="w-full flex justify-center mt-5 items-center">
          <textarea
            className="w-[80%] h-80 border-[1px] border-zinc-400 rounded-xl outline-none px-2 py-2 capitalize"
            placeholder="Description"
            {...register("ProductDescription")}
          ></textarea>
        </span>

        {/* Submit button */}
        <span className="w-full flex justify-center items-center">
          <button
            className="px-3 py-2 bg-blue-500 rounded text-white mt-5 hover:bg-blue-600 hover:scale-105 duration-300"
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
