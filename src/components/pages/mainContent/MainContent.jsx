import React from "react";
import Cards from "../../templates/Card/Cards";
import Footer from "../Footer/Footer";
import SearchBar from "../../templates/SearchBar/SearchBar";
function MainContent() {
  const img = [
    "https://i.pinimg.com/564x/0e/51/76/0e5176ff9b377d184c36ea57324aab85.jpg",
    "https://i.pinimg.com/564x/83/e2/14/83e2144cb6db9d3db062851ec3ec88d6.jpg",
    "https://i.pinimg.com/736x/23/85/bd/2385bd70f9d243dd5b4ceb1839edaabb.jpg",
    "https://i.pinimg.com/736x/c4/f8/ed/c4f8edb41bd4989dfd9f26d8e57035cd.jpg",
    "https://i.pinimg.com/564x/66/cc/1d/66cc1d857cb62f708b2d0acadcfbce9e.jpg",
    "https://i.pinimg.com/564x/0e/51/76/0e5176ff9b377d184c36ea57324aab85.jpg",
    "https://i.pinimg.com/564x/3d/7e/9d/3d7e9d809c7eacef8aa23680eb94ce67.jpg",
  ];
  return (
    <div className="w-[100vw] h-[91.7vh] md:px-4   flex   justify-center flex-col     ">
      {/* <SearchBar /> */}
      <div className="w-full h-full flex flex-wrap overflow-y-auto  justify-center md:gap-5 gap-4">
        {img.map((item, index) => (
          <Cards img={item} />
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default MainContent;
