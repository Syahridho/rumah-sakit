import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getMediceneFromAPI } from "../config/redux/action/action";
import GiveMediceneList from "./GiveMediceneList";
import { FiDelete } from "react-icons/fi";

const GiveMedicene = ({
  action,
  cancel,
  name,
  complaint,
  giveMedicene,
  medicene,
  minus,
  plus,
  getMedicene,
  data,
}) => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className="fixed top-0 left-0 backdrop-blur-sm  w-full h-full"
        onClick={cancel}
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="p-4 border w-96 h-auto max-h-[600px] bg-white rounded flex gap-4 flex-col justify-center ">
          <h1 className="font-bold text-xl text-center">Beri Obat</h1>
          <p>Name : {name}</p>
          <p>Keluhan : {complaint}</p>
          <p>Obat yang diberikan :</p>
          <div className="ms-4 flex flex-col gap-1">
            {giveMedicene.length > 0 ? (
              <>
                {giveMedicene.map((medicene) => {
                  return (
                    <div
                      key={medicene.id}
                      className="flex justify-between list-disc"
                    >
                      <h1>- {medicene.title}</h1>
                      <div className="flex gap-4">
                        <h5>{medicene.qty}x</h5>
                        <button
                          className="bg-red-500 text-white px-1 rounded"
                          onClick={() => minus(medicene.id)}
                        >
                          <FiDelete />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>

          <GiveMediceneList medicenes={medicene} addMedicene={plus} />
          <div className="grid grid-cols-2 gap-2 mx-2 md:gap-4">
            <button
              className="py-2 border border-green-500 bg-green-500 text-white rounded shadow hover:bg-green-600 hover:border-green-600 hover:shadow-md"
              onClick={action()}
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

const mapStateToProps = (state) => ({
  medicene: state.medicene,
});

export default connect(mapStateToProps, null)(GiveMedicene);
