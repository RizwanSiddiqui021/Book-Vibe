import React from "react";
import bannerImg from "../../assets/images/banner-book.png";
const Banner = () => {
  return (
    <div className="my-12">
      <div className="bg-[#1313130D] rounded-3xl px-28 py-20 flex items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-12">
            Books to freshen up your bookshelf
          </h1>
          <button className="bg-[#23BE0A] py-5 px-7 rounded-lg text-white text-xl font-bold">
            View The List
          </button>
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
