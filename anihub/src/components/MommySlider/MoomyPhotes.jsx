import ms1 from "./MommySlider-assets/ms1.jpg";
import ms2 from "./MommySlider-assets/ms2.jpg";
import ms3 from "./MommySlider-assets/ms3.jpg";
import ms4 from "./MommySlider-assets/ms4.jpg";
import ms5 from "./MommySlider-assets/ms5.jpg";
import ms6 from "./MommySlider-assets/ms6.jpg";
import ms7 from "./MommySlider-assets/ms7.jpg";
import ms8 from "./MommySlider-assets/ms8.jpg";
import ms9 from "./MommySlider-assets/ms9.jpg";
import ms10 from "./MommySlider-assets/ms10.jpg";
import ms11 from "./MommySlider-assets/ms11.jpg";
import ms12 from "./MommySlider-assets/ms12.jpg";
import ms13 from "./MommySlider-assets/ms13.jpg";
import ms14 from "./MommySlider-assets/ms14.jpg";
import ms15 from "./MommySlider-assets/ms15.jpg";
import ms16 from "./MommySlider-assets/ms16.jpg";
import ms17 from "./MommySlider-assets/ms17.jpg";
import ms18 from "./MommySlider-assets/ms18.jpg";
import ms19 from "./MommySlider-assets/ms19.jpg";
import ms20 from "./MommySlider-assets/ms20.jpg";
import ms21 from "./MommySlider-assets/ms21.jpg";
import ms22 from "./MommySlider-assets/ms22.jpg";

const MommyPhotes = () => {
  const image = [
    { url: ms1, title: "ms1" },
    { url: ms2, title: "ms2" },
    { url: ms3, title: "ms3" },
    { url: ms4, title: "ms4" },
    { url: ms5, title: "ms5" },
    { url: ms6, title: "ms6" },
    { url: ms7, title: "ms7" },
    { url: ms8, title: "ms8" },
    { url: ms9, title: "ms9" },
    { url: ms10, title: "ms10" },
    { url: ms11, title: "ms11" },
    { url: ms12, title: "ms12" },
    { url: ms13, title: "ms13" },
    { url: ms14, title: "ms14" },
    { url: ms15, title: "ms15" },
    { url: ms16, title: "ms16" },
    { url: ms17, title: "ms17" },
    { url: ms18, title: "ms18" },
    { url: ms19, title: "ms19" },
    { url: ms20, title: "ms20" },
    { url: ms21, title: "ms21" },
    { url: ms22, title: "ms22" },
  ];
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {image.map((image, index) => (
          <div
            key={index}
            className="border border-yellow-200 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MommyPhotes;
