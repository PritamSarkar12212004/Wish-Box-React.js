import axios from "axios";
import axiosInstance from "../../../../utils/axios/AxiosConfig";
import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Loading from "../../../loading/Loading";
import { gsap } from "gsap";

function AdminItemUpload() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [imageList, setImageList] = useState([]);

  // Refs for elements to animate
  const uploadRefs = useRef([]);
  const formRef = useRef(null);

  // GSAP animations when component mounts
  useEffect(() => {
    // Animate upload icons
    gsap.fromTo(
      uploadRefs.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.1,
      }
    );

    // Animate form
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  const reciveBackedData = (data) => {
    setBackendResponse(data.data[0]);
    reset();
    navigate("/dashbord/adminproducts");
  };

  const handleFormSubmission = async (infos) => {
    setLoader(true);
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
      await axiosInstance.post("/upload/product", { infos, uploadedImageURLs });
      reciveBackedData(responses);
    } catch (err) {
      console.error("Error uploading images:", err);
    } finally {
      setLoader(false);
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
      {loader && <Loading />}
      <form
        ref={formRef} // Reference to the form for GSAP animation
        className="lg:w-[60%] md:w-[70%] w-full sm:px-3 md:px-0 flex flex-col"
        onSubmit={handleSubmit(handleFormSubmission)}
      >
        {/* Image Upload Section */}
        <div className="w-full flex flex-wrap justify-center gap-6 mt-5">
          {["First", "Second", "Third", "Fourth", "Fifth"].map(
            (label, index) => (
              <label
                key={index}
                htmlFor={`img${index}`}
                className="flex flex-col items-center justify-center w-24 h-24 rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 cursor-pointer hover:scale-105 transition-transform duration-300"
                ref={(el) => (uploadRefs.current[index] = el)} // Reference to each upload icon
              >
                <i className="ri-image-add-line text-4xl text-gray-500"></i>
                <h1 className="text-sm text-gray-600 mt-2">{label} Image</h1>
                <input
                  type="file"
                  className="hidden"
                  id={`img${index}`}
                  onChange={(e) => handleImageChange(e, index)}
                />
              </label>
            )
          )}
        </div>

        {/* Input Fields for Product Info */}
        <div className="mt-8 w-full flex flex-wrap gap-5 justify-center">
          <input
            type="text"
            required
            placeholder="Item Name"
            className="h-12 px-4 border border-gray-300 rounded-lg w-72"
            {...register("ProductName")}
          />
          <input
            type="number"
            required
            placeholder="Price"
            className="h-12 px-4 border border-gray-300 rounded-lg w-72"
            {...register("ProductPrice")}
          />
          <select
            className="h-12 px-4 border border-gray-300 rounded-lg w-72"
            {...register("ProductCategory")}
          >
            {/* Product Categories */}
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
            className="h-12 px-4 border border-gray-300 rounded-lg w-32"
            {...register("ProductLength")}
          />
          <input
            type="text"
            required
            placeholder="Width"
            className="h-12 px-4 border border-gray-300 rounded-lg w-32"
            {...register("ProductWidth")}
          />
        </div>

        {/* Description Input */}
        <div className="w-full flex justify-center mt-6">
          <textarea
            required
            className="w-[80%] h-48 border border-gray-300 rounded-lg p-4 resize-none"
            placeholder="Description"
            {...register("ProductDescription")}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="w-full flex justify-center mt-6">
          <button
            className="px-8 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
            type="submit"
          >
            Upload <i className="ri-upload-cloud-2-line"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminItemUpload;
