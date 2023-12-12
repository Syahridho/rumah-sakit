const MediceneAlertDelete = ({ action, cancel }) => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className="fixed top-0 left-0 backdrop-blur-sm  w-full h-full"
        onClick={cancel}
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="p-4 border w-64 h-40 bg-white rounded flex gap-4 flex-col justify-center md:w-72">
          <h1 className="font-bold text-xl text-center">
            Yakin ingin menghapus?
          </h1>
          <div className="grid grid-cols-2 gap-2 mx-2 md:gap-4">
            <button
              className="py-2 border border-red-500 bg-red-500 text-white rounded shadow hover:bg-red-600 hover:border-red-600 hover:shadow-md"
              onClick={action}
            >
              Hapus
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

export default MediceneAlertDelete;
