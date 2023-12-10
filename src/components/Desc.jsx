const Desc = ({ isAdmin }) => {
  return (
    <div id="desc" className="my-10">
      <h1 className="font-bold text-center text-2xl mb-2">
        Halo, {isAdmin ? "Admin" : "Pengunjung"}{" "}
      </h1>
      <p className="mx-8 text-left md:text-center">
        Selamat datang di Rumah Sakit, tempat di mana kesehatan dan pelayanan
        unggul bertemu.
      </p>
    </div>
  );
};

export default Desc;
