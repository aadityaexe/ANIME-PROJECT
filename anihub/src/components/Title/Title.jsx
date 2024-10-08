/* eslint-disable react/prop-types */

const Title = ({ title, subTitle, Id }) => {
  return (
    <section
      className=" py-[30px] dark:bg-dark bg-opacity-10 bg-yellow-300"
      id={`${Id}`}
    >
      <div className="mx-auto px-4 sm:container" id={`${Id}`}>
        <div className="border-l-[5px] border-primary pl-5">
          <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
            {title}
          </h2>
          <p className="text-sm font-medium text-body-color dark:text-dark-6">
            {subTitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Title;
