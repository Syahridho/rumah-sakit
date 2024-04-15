const Desc = ({ isAdmin, isDoctor }) => {
  return (
    <div id="desc" className="my-10">
      <h1 className="font-bold text-center text-2xl mb-2">
        Halo, {isAdmin ? "Admin" : isDoctor ? "Dokter" : "Pengunjung"}
      </h1>
      <p className="mx-8 text-left md:text-center">
        Selamat datang di Klinik, tempat di mana kesehatan dan pelayanan unggul
        bertemu.
      </p>
    </div>
  );
};

export default Desc;
