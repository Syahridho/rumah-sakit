const MediceneInput = ({
  title,
  stock,
  titleChange,
  stockChange,
  addMedicene,
  updateMedicene,
  isUpdate,
  cancelUpdate,
}) => {
  return (
    <div
      id="contact"
      className="mx-8 flex flex-col md:flex-row md:justify-center md:items-center md:gap-4"
    >
      <div className="flex flex-col md:items-center gap-2  md:flex-row">
        <label htmlFor="title">Nama Obat</label>
        <input
          type="text"
          name="title"
          className="border mb-2 px-2 py-1 rounded-sm md:mb-0"
          value={title}
          onChange={titleChange}
          placeholder="Obat"
        />
      </div>
      <div className="flex flex-col md:items-center gap-2 md:flex-row">
        <label htmlFor="stock">Stock Obat</label>
        <input
          type="text"
          name="stock"
          className="border px-2 py-1 mb-2  md:mb-0"
          value={stock}
          onChange={stockChange}
          placeholder="Stock"
        />
      </div>
      {isUpdate ? (
        <div className="flex flex-row gap-4">
          <button
            className="text-center bg-slate-800 w-full text-white rounded py-2 shadow border border-slate-800 mt-2 md:mt-0  md:w-auto md:px-4"
            onClick={() => updateMedicene()}
          >
            Update Obat
          </button>
          <button
            className="text-slate-800 bg-white w-full text-center rounded py-2 shadow border border-slate-800 mt-2 md:mt-0  md:w-auto md:px-4"
            onClick={() => cancelUpdate()}
          >
            Batalkan
          </button>
        </div>
      ) : (
        <button
          className="text-center bg-slate-800 w-full text-white rounded py-2 shadow border border-slate-800 mt-2 md:mt-0  md:w-auto md:px-4"
          onClick={() => addMedicene()}
        >
          Tambah Obat
        </button>
      )}
    </div>
  );
};

export default MediceneInput;
