import { Link } from 'react-router-dom';


export default function Card() {
  const cardsData = [
     {
      title: "Flip for Gsap",
      description:"",
      link: "/flip",
   
    },
    {
      title: "",
      description:"",
      link: "/",
    },
    {
      title: "",
      description:"",
      link: "/",
    },
   
    {
      title: "",
      description:"",
      link: "/",
    },
    {
      title: "",
      description:"",
      link: "/",
    },
    {
      title: "",
      description:"",
      link: "/",
    },
    
   
  ];

  return (
    <>
      <h1 className="text-center text-3xl font-extrabold p-8 text-[#d8ebbd] mt-[4%] z-[9999] m-auto">
        Browse GSAP Components
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-4 md:px-36 pb-20">
        {cardsData.map((card, index) => (
          <Link
            to={card.link}
            key={index}
            className="p-4 py-6 bg-[#272822] shadow-lg rounded-2xl transition ease-in-out hover:scale-105 cursor-pointer border-t-4 border-[#4caf50]"
            style={{ position: "relative" }}
          >
            <div className="flex flex-col items-center justify-center cursor-pointer py-4">
           
              <p className="mt-4 text-xl font-semibold text-[#cc99cd] cursor-pointer">
                {card.title}
              </p>
              <p className="px-2 py-2 text-md text-center text-gray-400 cursor-pointer font-medium mb-4">
                {card.description}
              </p>
            </div>
          {card.component}
          </Link>
        ))}
      </div>
   
    </>
  );
}
