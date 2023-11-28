import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [navOn, setNavOn] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setNavOn(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white flex flex-col justify-between items-center shadow md:flex-row md:px-12 xl:px-32 ">
      <div className="py-2 px-7 w-full flex justify-between items-center shadow md:shadow-none md:py-6 md:w-auto">
        <h1 className="font-extrabold text-blue-900 text-xl">Rumah Sakit</h1>
        <button className="p-2 md:hidden" onClick={() => setNavOn(!navOn)}>
          {navOn ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
        </button>
      </div>
      {navOn ? (
        <div className="mt-1 md:mt-0 xl:me-10">
          <ul className="text-blue-900 flex flex-col items-center gap-1 md:flex-row md:gap-7">
            <li>
              <a
                href="#"
                className="w-screen text-center bg-stone-50 block py-4 md:w-auto md:bg-transparent md:p-0"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-screen text-center bg-stone-50 block py-4 md:w-auto md:bg-transparent md:p-0"
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-screen text-center bg-stone-50 block py-4 md:w-auto md:bg-transparent md:p-0"
              >
                Contact
              </a>
            </li>
            <li className="flex gap-2 py-8 md:py-0">
              <a
                href="
                #"
                className="block font-semibold bg-white text-sky-800 border border-sky-800 py-2 px-4 rounded transition duration-500 hover:shadow hover:bg-sky-800 hover:text-white"
              >
                Masuk
              </a>
              <a
                href="
                #"
                className="block font-semibold bg-sky-800 text-white border border-sky-800 py-2 px-4 transition duration-500 rounded hover:bg-sky-950"
              >
                Daftar
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
