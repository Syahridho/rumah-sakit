const DoctorInput = () => {
  return (
    <div className="container mx-auto grid md:grid-cols-4 lg:grid-cols-8">
      <form
        onSubmit={console.log("Helo")}
        className="flex flex-col mx-8 md:col-start-2 md:col-span-2 lg:col-start-3 lg:col-span-4"
      >
        <h1 className="text-center font-bold text-2xl my-8">
          Tambahkan Dokter
        </h1>
        <label htmlFor="name">Nama Dokter</label>
        <input
          type="text"
          className="border mb-2 px-2 py-1 rounded-sm "
          name="name"
          required
        />
        <label htmlFor="specialis">Spesialis</label>
        <input
          type="text"
          name="specialis"
          className="border mb-2 px-2 py-1 rounded-sm "
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="border mb-2 px-2 py-1 rounded-sm "
          name="email"
          required
        />
        <button
          className="mt-6 bg-slate-800 text-white py-2 rounded"
          type="submit"
        >
          Tambah Dokter
        </button>
      </form>
    </div>
  );
};

export default DoctorInput;
