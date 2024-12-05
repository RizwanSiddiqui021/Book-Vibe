import React from "react";
import starLogo from "../../assets/images/star.png";

const Book = ({ book }) => {
  const { image, bookName, author, rating, tags, category } = book;
  return (
    <div className="border rounded-2xl p-6">
      <div className="bg-[#F3F3F3] flex items-center justify-center rounded-xl p-10 mb-6">
        <img className="w-[120px] h-[180px]" src={image} alt="" />
      </div>
      <div>
        <div className="flex gap-4 mb-4">
          <h3 className="bg-[#23BE0A0D] px-4 py-2 rounded-3xl text-[#23BE0A] font-medium">
            {tags[0]}
          </h3>
          <h3 className="bg-[#23BE0A0D] px-4 py-2 rounded-3xl text-[#23BE0A] font-medium">
            {tags[1]}
          </h3>
        </div>
        <h1 className="text-2xl font-bold mb-4">{bookName}</h1>
        <p className="text-[#131313CC] font-medium">By: {author}</p>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p>{category}</p>
          <div className="flex items-center gap-2">
            <p>{rating}</p>
            <img src={starLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
