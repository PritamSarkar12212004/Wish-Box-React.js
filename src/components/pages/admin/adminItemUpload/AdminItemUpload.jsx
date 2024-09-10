import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Axios for HTTP requests

function AdminItemUpload() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  // Submit the form data and images
  const submitForm = async (data) => {
    const formData = new FormData();

    // Append files to formData
    formData.append("images", data.image1[0]); // First image
    formData.append("images", data.image2[0]); // Second image
    formData.append("images", data.image3[0]); // Third image

    // Append other form data
    formData.append("price", data.price);
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("width", data.width);
    formData.append("height", data.hight); // Note: Corrected from "hight" to "height"
    formData.append("description", data.description);

    try {
      // Make the POST request to your backend API
      const response = await axios.post(
        "http://localhost:3000/item/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Check for success and navigate after upload
      if (response.status === 200) {
        console.log("Upload successful:", response.data);
        reset(); // Reset the form
        navigate("/dashboard/adminproducts");
      }
    } catch (error) {
      console.error("Error uploading the item:", error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-[91.8vh] overflow-y-auto">
      <h1 className="text-3xl m-2 font-bold">Publish Items</h1>
      <form
        action=""
        className="w-[50%] h-full"
        onSubmit={handleSubmit(submitForm)}
        encType="multipart/form-data" // Important for file uploads
      >
        <div className="flex flex-col h-full gap-4 overflow-y-auto">
          <input
            type="file"
            placeholder="Upload Image 1"
            className="border-b-2 border-b-zinc-300"
            {...register("image1")}
            accept="image/*" // Allow only image files
          />
          <input
            type="file"
            placeholder="Upload Image 2"
            className="border-b-2 border-b-zinc-300"
            {...register("image2")}
            accept="image/*"
          />
          <input
            type="file"
            placeholder="Upload Image 3"
            className="border-b-2 border-b-zinc-300"
            {...register("image3")}
            accept="image/*"
          />
          <input
            type="text"
            placeholder="Item Price"
            className="text-black w-[70%] px-3 py-2 bg-zinc-300 rounded-md placeholder:text-zinc-700 capitalize"
            {...register("price")}
          />
          <input
            type="text"
            placeholder="Item Name"
            className="text-black w-[70%] px-3 py-2 bg-zinc-300 rounded-md placeholder:text-zinc-700 capitalize"
            {...register("name")}
          />
          <div className="flex flex-col gap-1">
            <label htmlFor="cate">Item Type</label>
            <select
              id="cate"
              className="w-[50%] bg-blue-300 px-2 py-2 rounded-xl"
              {...register("category")}
            >
              <option value="kite">Kite</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <span className="flex gap-10">
            <input
              type="text"
              placeholder="Width"
              className="text-black w-[30%] px-3 py-2 bg-zinc-300 rounded-md placeholder:text-zinc-700 capitalize"
              {...register("width")}
            />
            <input
              type="text"
              placeholder="Height"
              className="text-black w-[30%] px-3 py-2 bg-zinc-300 rounded-md placeholder:text-zinc-700 capitalize"
              {...register("hight")} // Note: Corrected in formData to "height"
            />
          </span>
          <textarea
            placeholder="Description"
            className="w-full h-40 border-[1px] border-zinc-500 outline-none px-2 py-2 rounded-xl"
            {...register("description")}
          ></textarea>
        </div>
        <button className="px-5 py-2 bg-blue-500 text-white rounded">
          Publish
        </button>
      </form>
    </div>
  );
}

export default AdminItemUpload;
