const GiveMediceneCard = ({ id, title, stock }) => {
  return (
    <div
      id={id}
      className="flex justify-between items-center border p-2 rounded"
    >
      <div>
        <h1>{title}</h1>
        <h5>{stock}</h5>
      </div>
      <button className="bg-blue-500 text-white text-sm p-2 rounded transition duration-500 hover:bg-blue-800">
        Tambahkan Obat
      </button>
    </div>
  );
};

export default GiveMediceneCard;
