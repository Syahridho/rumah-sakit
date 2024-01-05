import PdfGenerate from "./PdfGenerate";

const VisitorCard = ({ id, name, date, onDelete, isDone, medicene, data }) => {
  if (isDone) {
    return (
      <div
        id={id}
        className="bg-blue-300 px-4 py-4 rounded border border-blue-800"
      >
        <h1>Semoga Cepat sehat</h1>
        <h2>{name}</h2>
        <p>
          Obat Anda :{" "}
          {Array.isArray(medicene) && medicene.length > 0 ? (
            <>
              {medicene.map((medic) => (
                <li className="list-disc" key={medic.id}>
                  {medic.title}
                </li>
              ))}
            </>
          ) : null}
        </p>
        <PdfGenerate data={data} />
        <p className="text-sm">Terima Kasih telah berobat disini</p>
      </div>
    );
  }
  return (
    <div
      id={id}
      className="bg-green-300 px-4 py-4 rounded border border-green-800"
    >
      <h1>Janji sudah dibuat.</h1>
      <h2>{name}</h2>
      <p className="text-sm">Jangan lupa pada tanggal :</p>
      <p className="text-sm">{date}</p>
      <button
        className="bg-red-500 p-2 text-sm text-white rounded-sm border border-red-500 mt-1 transition duration-500 hover:bg-red-700 hover:border-red-700"
        onClick={() => onDelete(id)}
      >
        Batalkan?
      </button>
    </div>
  );
};

export default VisitorCard;
