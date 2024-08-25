import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PhotosCollectionTitle.css";
/* eslint-disable react/prop-types */
const PhotosCollectionTitle = ({
  showhuk,
  titel,
  subTitel,
  Id,
  path,
  path2,
}) => {
  const nav = useNavigate();
  const [page, setPage] = useState(false);

  return (
    <section
      className="py-[30px] pt-20 dark:bg-dark bg-opacity-10 bg-yellow-300"
      id={`${Id}`}
    >
      <div className="mx-auto px-10 sm:container">
        <div className="border-l-[5px] border-primary pl-5">
          <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
            {titel}
          </h2>
          <p className="text-sm font-medium text-body-color dark:text-dark-6">
            {subTitel}
          </p>
        </div>
        <div className="text-right mt-4">
          <button
            className="bg-gradient-to-r from-green-400 via-pink-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-green-500 hover:via-pink-600 hover:to-yellow-600 transition duration-300"
            onClick={() => {
              {
                !page ? nav(path2) : nav(path);
              }
              setPage(!page);
            }}
          >
            {showhuk ? "Go back" : `See more ${titel}`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotosCollectionTitle;
