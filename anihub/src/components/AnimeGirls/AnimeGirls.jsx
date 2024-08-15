import { useEffect, useState } from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-10">
      <div className="w-10 h-10 border-4 border-t-4 border-yellow-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

const AnimeGirls = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.nekosapi.com/v3/images", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setImages(data.items);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const isSafeImage = (tags) => {
    // Check if any tag has is_nsfw set to true
    return !tags.some((tag) => tag.is_nsfw);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto p-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images
          .filter((image) => isSafeImage(image.tags))
          .map((image) => (
            <div
              key={image.id}
              className="border border-yellow-200 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image.image_url}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AnimeGirls;
