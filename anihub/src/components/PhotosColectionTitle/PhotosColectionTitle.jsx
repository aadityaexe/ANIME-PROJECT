/* eslint-disable react/prop-types */

const PhotosColectionTitle = ({ showWifu, setShowWifu }) => {
  const showWifuPic = () => {
    setShowWifu(!showWifu);
  };
  const hideWifuPic = () => {
    setShowWifu(!showWifu);
  };

  return (
    <section className="py-[30px] pt-20 dark:bg-dark bg-opacity-10 bg-yellow-300">
      <div className="mx-auto px-10 sm:container">
        <div className="border-l-[5px] border-primary pl-5">
          <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
            Wifu
          </h2>
          <p className="text-sm font-medium text-body-color dark:text-dark-6">
            These are some hot Wifu
          </p>
        </div>
        <div className="text-right mt-4">
          {showWifu ? (
            <button
              className="bg-gradient-to-r from-green-400 via-pink-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-green-500 hover:via-pink-600 hover:to-yellow-600 transition duration-300"
              onClick={hideWifuPic}
            >
              Go back
            </button>
          ) : (
            <button
              className="bg-gradient-to-r from-green-400 via-pink-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-green-500 hover:via-pink-600 hover:to-yellow-600 transition duration-300"
              onClick={showWifuPic}
            >
              See Wifu
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhotosColectionTitle;
