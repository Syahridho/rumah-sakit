const GiveMedicene = ({ action, cancel, name, complaint, onChange, value }) => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className="fixed top-0 left-0 backdrop-blur-sm  w-full h-full"
        onClick={cancel}
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="p-4 border w-96 h-72 bg-white rounded flex gap-4 flex-col justify-center ">
          <h1 className="font-bold text-xl text-center">Beri Obat</h1>
          <p>Name : {name}</p>
          <p>Keluhan : {complaint}</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="border rounded p-2"
            onChange={onChange}
            value={value}
          ></textarea>
          <div className="grid grid-cols-2 gap-2 mx-2 md:gap-4">
            <button
              className="py-2 border border-green-500 bg-green-500 text-white rounded shadow hover:bg-green-600 hover:border-green-600 hover:shadow-md"
              onClick={action}
            >
              Beri
            </button>
            <button
              className="py-2 border border-slate-500 bg-slate-800 text-white rounded shadow hover:bg-slate-800 hover:border-slate-800 hover:shadow-md"
              onClick={cancel}
            >
              Batalkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveMedicene;
