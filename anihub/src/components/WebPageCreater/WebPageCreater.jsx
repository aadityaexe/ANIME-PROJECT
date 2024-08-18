import katana from "./WebPageCreater-assets/katana.jpg";
import adityaExe from "./WebPageCreater-assets/aditya-exe.jpg";
import adi from "./WebPageCreater-assets/adi.jpg";
import instagram from "./WebPageCreater-assets/instagram.png";
import x from "./WebPageCreater-assets/x.png";
import github from "./WebPageCreater-assets/github.png";
import background from "./WebPageCreater-assets/bgUs.png";
import "./WebPageCreater.css";
const WebPageCreater = () => {
  const cards = [
    {
      imgSrc: katana,
      name: "KATANA",
      logos: [
        { src: instagram, link: "https://link-to-logo1.com" },
        { src: x, link: "https://link-to-logo2.com" },
        { src: github, link: "https://link-to-logo3.com" },
      ],
    },
    {
      imgSrc: adityaExe,
      name: "ADITYA-EXE",
      logos: [
        { src: instagram, link: "https://www.instagram.com/adityakumar.01/" },
        {
          src: x,
          link: "https://x.com/Aadityakumar_01?t=DNUfBB6tK2t41lfWMHIIEQ&s=09",
        },
        { src: github, link: "https://github.com/aadityaexe" },
      ],
    },
    {
      imgSrc: adi,
      name: "ADI",
      logos: [
        { src: instagram, link: "https://link-to-logo1.com" },
        { src: x, link: "https://link-to-logo2.com" },
        { src: github, link: "https://link-to-logo3.com" },
      ],
    },
  ];

  return (
    <div
      className="flex justify-center items-center p-4 min-h-screen bg-cover "
      style={{ backgroundImage: `url(${background})` }}
      id="WE"
    >
      <div>
        <div>
          <h1 className="text-4xl text-black-900 pb-10 text-shadow-md hover:text-shadow-lg transition-all duration-300 transform hover:scale-105">
            Among Heaven and Hell we are the most cursed ones...
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-transform hover:scale-105"
            >
              <img
                src={card.imgSrc}
                alt={card.name}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <h2 className="text-2xl font-semibold mt-6">{card.name}</h2>
              <div className="flex mt-6 space-x-6">
                {card.logos.map((logo, logoIndex) => (
                  <a
                    key={logoIndex}
                    href={logo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={logo.src}
                      alt={`Logo ${logoIndex + 1}`}
                      className="w-12 h-12 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebPageCreater;
