import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import KeyWest from "../assets/keywest.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
// import SelectsCard from "./SelectsCard";

const Selects = () => {
  const images = [
    {
      id: 1,
      image: Maldives,
      name: "Maldives",
    },
    {
      id: 2,
      image: Maldives2,
      name: "jamaica",
    },
    {
      id: 3,
      image: BoraBora,
      name: "Bora Bora",
    },
    {
      id: 4,
      image: BoraBora2,
      name: "Cozumel",
    },
    {
      id: 5,
      image: KeyWest,
      name: "Key West",
    },
    {
      id: 6,
      image: Maldives3,
      name: "Antigua",
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map(({ id, image, name }) => (
        <div key={id} className="relative ">
          <img src={image} alt="" className="w-full h-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30">
            <p className="absolute text-xl font-bold text-white left-4 bottom-4">
              {name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Selects;
