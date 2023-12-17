import hero from "./../assets/hero.png";

const Hero = () => {
  return (
    <div id="home" className="container mx-auto p-6 md:p-0">
      <div className="grid grid-cols-2 h-[80vh] items-center md:grid-cols-8 ">
        <div className="col-span-2 md:col-start-6 mx-auto md:order-last">
          <img
            src={hero}
            alt="logo"
            className="w-72 h-auto drop-shadow-lg md:w-auto md:h-auto md:scale-125"
          />
        </div>
        <div className="col-span-2 md:col-start-2">
          <h1 className="font-bold text-2xl text-sky-800 md:text-4xl">
            Rumah Sakit
          </h1>
          <p className="text-sky-700 mb-3 mt-1">
            Mempermudah anda dalam membuat janji dengan dokter
          </p>
          <a
            href="#desc"
            className="bg-sky-800 text-white px-4 py-2 rounded shadow transition duration-500 hover:shadow-xl hover:bg-sky-950"
          >
            Buat Janji
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
