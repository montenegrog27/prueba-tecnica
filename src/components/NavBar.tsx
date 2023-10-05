import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const nav: { id: number; name: string; link: string }[] = [
    { id: 1, name: "Mi menu", link: "/home" },
    { id: 2, name: "Crear Menu", link: "/crearmenu" },
  ];
  return (
    <>
      <div className="grid  grid-cols-7 z-10  w-full bg-white fixed">
        <div className=" text-gray-900 flex justify-start ml-5 items-center "></div>
        <div className=" flex  col-span-5 justify-center ">
          {nav.map((elemento) => (
            <Link
              key={elemento.id}
              className="m-3  text-gray-900 sm:text-[8px] md:text-[10px] lg:text-[14px] hover:text-black transition duration-300 ease-in-out relative group"
              to={elemento.link}
            >
              <span className="fontPoppins relative">{elemento.name}</span>
              <span
                className={`absolute w-full h-[2px] bg-gray-900 opacity-0 bottom-0 left-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 ${
                  location.pathname === elemento.link
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavBar;
