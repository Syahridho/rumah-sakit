const PatientInput = ({
  name,
  gender,
  date,
  phone,
  doctor,
  complaints,
  onChange,
  onSubmit,
  onUpdate,
  isUpdate,
  onCancel,
  alertLogin,
}) => {
  return (
    <div className="flex justify-center">
      <div
        className="flex flex-col w-full mx-8 md:w-96 md:gap-4"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nama Pasien</label>
          <input
            type="text"
            name="name"
            className="border mb-2 px-2 py-1 rounded-sm md:mb-0"
            value={name}
            onChange={(e) => onChange(e, "name")}
            placeholder="Nama"
            required
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="gender">Jenis Kelamin</label>
          <select
            name="gender"
            id=""
            value={gender}
            onChange={(e) => onChange(e, "gender")}
            className="border mb-2 px-2 py-1 rounded-sm md:mb-0"
            required
          >
            <option value="Laki-Laki">Laki-Laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="date">Tanggal Janji</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => onChange(e, "date")}
            className="border px-2 py-1 mb-2  md:mb-0"
            required
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="phone">No Hp</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => onChange(e, "phone")}
            className="border px-2 py-1 mb-2  md:mb-0"
            placeholder="+628"
            required
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="doctor">Pilih Dokter</label>
          <select
            name="doctor"
            id=""
            className="border mb-2 px-2 py-1 rounded-sm md:mb-0"
            value={doctor}
            onChange={(e) => onChange(e, "doctor")}
            required
          >
            <option value="nadia@gmail.com">Dr. Nadia Arifin (Umum)</option>
            <option value="adrian@gmail.com">Dr. Adrian Putra (Anak)</option>
            <option value="lina@gmail.com">Dr. Lina Santosa (THT)</option>
            <option value="raditya@gmail.com">
              Dr. Raditya Pratama (Kulit)
            </option>
            <option value="anita@gmail.com">Dr. Anita Wijaya (Gigi)</option>
            <option value="farida@gmail.com">Dr. Farida Rahayu (Mata)</option>
            <option value="amanda@gmail.com">
              Dr. Amanda Susanto (Jantung)
            </option>
            <option value="dian@gmail.com">Dr. Dian Utami (Psikolog)</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="complaints">Keluhan</label>
          <textarea
            name="complaints"
            id=""
            className="border px-2 py-1 mb-2  md:mb-0"
            cols="20"
            rows="8"
            value={complaints}
            onChange={(e) => onChange(e, "complaints")}
            placeholder="Apa keluhan anda ?"
            required
          ></textarea>
        </div>
        {alertLogin ? (
          <div className="text-red-500">
            <p>Harus login terlebih dahulu</p>
          </div>
        ) : null}

        {isUpdate ? (
          <div className="flex flex-row gap-4">
            <button
              className=" bg-slate-800 w-full text-white rounded py-2 shadow border border-slate-800 mt-2 md:mt-0  md:w-auto md:px-4"
              onClick={onUpdate}
            >
              Update Pasien
            </button>
            <button
              className="text-slate-800 bg-white w-full  rounded py-2 shadow border border-slate-800 mt-2 md:mt-0  md:w-auto md:px-4"
              onClick={onCancel}
            >
              Batalkan
            </button>
          </div>
        ) : (
          <button
            className=" bg-slate-800 w-full text-white rounded py-2 shadow border border-slate-800 mt-2 transition duration-500 hover:bg-slate-950  md:mt-0  md:w-auto md:px-4"
            onClick={onSubmit}
          >
            Tambah Pasien
          </button>
        )}
      </div>
    </div>
  );
};

export default PatientInput;
