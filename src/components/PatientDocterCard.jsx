const PatientDocterCard = ({
  id,
  name,
  gender,
  date,
  phone,
  doctor,
  complaint,
  isDone,
  medicene,
  onGive,
}) => {
  return (
    <div
      id={id}
      className="flex flex-col p-4 border border-slate-300 rounded shadow col-span-8 md:col-span-4 lg:col-span-2 xl:col-span-2"
    >
      <table className="w-full">
        <tr>
          <td>Nama</td>
          <td>: {name}</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>: {gender}</td>
        </tr>
        <tr>
          <td>Tanggal</td>
          <td>: {date}</td>
        </tr>
        <tr>
          <td>No Hp</td>
          <td>: {phone}</td>
        </tr>

        <tr>
          <td>Dokter</td>
          <td>
            : {""}
            {doctor === "nadia@gmail.com"
              ? "Dr. Nadia Arifin (Umum)"
              : doctor === "adrian@gmail.com"
              ? "Dr. Adrian Putra (Anak)"
              : doctor === "lina@gmail.com"
              ? "Dr. Lina Santosa (THT)"
              : doctor === "raditya@gmail.com"
              ? "Dr. Raditya Pratama (Kulit)"
              : doctor === "anita@gmail.com"
              ? "Dr. Anita Wijaya (Gigi)"
              : doctor === "farid@gmail.com"
              ? "Dr. Farida Rahayu (Mata)"
              : doctor === "amanda@gmail.com"
              ? "Dr. Amanda Susanto (Jantung)"
              : doctor === "dian@gmail.com"
              ? "Dr. Dian Utami (Psikolog)"
              : "Dokter"}
          </td>
        </tr>
        <tr>
          <td>Keluhan</td>
          <td>: {complaint}</td>
        </tr>
        <tr>
          <td>Selesai</td>
          <td>: {isDone ? "Sudah" : "Belum"}</td>
        </tr>
        {isDone ? (
          <tr>
            <td>Obat</td>
            <td>: {medicene}</td>
          </tr>
        ) : null}
      </table>
      <div className="flex gap-2 mt-2">
        {isDone ? (
          <button
            className="text-center bg-orange-600 w-full text-white rounded py-2  shadow border border-orange-600"
            onClick={onGive}
          >
            Ganti Obat
          </button>
        ) : (
          <button
            className="text-center bg-green-600 w-full text-white rounded py-2  shadow border border-green-600"
            onClick={onGive}
          >
            Beri Obat
          </button>
        )}
      </div>
    </div>
  );
};

export default PatientDocterCard;
