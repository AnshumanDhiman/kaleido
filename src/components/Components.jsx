import { Link } from 'react-router-dom';

export default function Card() {
  const cardsData = [
    {
      title: "Flip for GSAP",
      description: "A GSAP Flip animation example with smooth transitions.",
      link: "/flip",
    },
    {
      title: "Animations with GSAP",
      description: "Learn about animations with GSAP.",
      link: "/component2",
    },
    {
      title: "Interactive Techniques",
      description: "Explore interactive animation techniques.",
      link: "/component3",
    },
    {
      title: "Advanced GSAP Components",
      description: "Advanced GSAP components for developers.",
      link: "/component4",
    },
    {
      title: "Creative Animations",
      description: "Creative animations for stunning UIs.",
      link: "/component5",
    },
    {
      title: "Dynamic Interactions",
      description: "Build dynamic interactions with GSAP.",
      link: "/component6",
    },
  ];

  return (
    <>
      <h1 className="text-center text-3xl sm:text-4xl font-extrabold p-6 md:p-8 text-[#d8ebbd] mt-4 z-[9999]">
        Browse GSAP Components
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-16 md:px-36 pb-20">
        {cardsData.map((card, index) => (
          <Link
            to={card.link}
            key={index}
            className="p-6 bg-gradient-to-r from-[#4caf50] to-[#81c784] border-2 border-[#4caf50] rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer transform hover:shadow-2xl hover:from-[#81c784] hover:to-[#4caf50]"
          >
            <div className="flex flex-col items-center justify-center py-2">
              <div className="bg-[#4caf50] text-white rounded-t-xl w-full text-center p-4 border-b-2 border-[#388e3c]">
                <h2 className="text-lg font-semibold hover:text-[#f1f8e9]">{card.title || "Untitled"}</h2>
              </div>
              <p className="px-2 py-2 text-sm text-center text-gray-100 font-medium mb-2 hover:text-[#f1f8e9]">
                {card.description || "No description available."}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
