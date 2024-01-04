import { useEffect, useState } from "react";
import PatientDocterCard from "./PatientDocterCard";
import GiveMedicene from "./GiveMedicene";
import { connect } from "react-redux";
import {
  getMediceneFromAPI,
  minusMediceneToAPI,
} from "../config/redux/action/action";

const PatientDocterList = ({
  patients,
  onGive,
  getMedicene,
  medicene,
  minusMediceneToAPI,
}) => {
  const [alertGive, setAlertGive] = useState(false);
  const [target, setTarget] = useState("");
  const [nameTarget, setNameTarget] = useState("");
  const [complaintTarget, setComplaintTarget] = useState("");
  const [data, setData] = useState();
  const [patient, setPatient] = useState();
  const [giveMedice, setGiveMedice] = useState([]);
  const alert = (id, name, complaint, data, patient) => {
    setData(data);
    setAlertGive(true);
    setNameTarget(name);
    setComplaintTarget(complaint);
    setTarget(id);
    setPatient(patient);
  };

  useEffect(() => {
    getMedicene();
  }, []);

  const onSubmit = () => {
    onGive(patient.data, giveMedice, patient.id);
    setGiveMedice([]);
    setAlertGive(false);
    // disini
    for (let i = 0; i < giveMedice.length; i++) {
      minusMediceneToAPI(giveMedice[i], giveMedice[i].id, giveMedice[i].qty);
    }
  };

  const minusMedicene = (id) => {
    setGiveMedice((prevMedicenes) =>
      prevMedicenes.filter((medicene) => medicene.id !== id)
    );
  };
  const plusMedicene = (medicene) => {
    const itemInCart = giveMedice.find((item) => item.id === medicene.id);
    if (itemInCart) {
      setGiveMedice(
        giveMedice.map((item) =>
          item.id === medicene.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setGiveMedice((prevMedicenes) => [
        ...prevMedicenes,
        {
          id: medicene.id,
          title: medicene.title,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <div className="grid grid-cols-8 lg:grid-cols-6 xl:grid-cols-8 gap-2 px-8 my-8 md:px-0">
      {patients.length > 0 ? (
        <>
          {patients.map((patient) => {
            return (
              <PatientDocterCard
                key={patient.data.id}
                id={patient.data.id}
                name={patient.data.name}
                gender={patient.data.gender}
                date={patient.data.date}
                phone={patient.data.phone}
                doctor={patient.data.doctor}
                complaint={patient.data.complaints}
                isDone={patient.data.isDone}
                medicene={patient.data.medicene}
                onGive={() =>
                  alert(
                    patient.id,
                    patient.data.name,
                    patient.data.complaints,
                    patient.data,
                    patient
                  )
                }
              />
            );
          })}
        </>
      ) : (
        <p>Data Kosong</p>
      )}
      {alertGive ? (
        <GiveMedicene
          name={nameTarget}
          data={patient}
          complaint={complaintTarget}
          action={() => onSubmit}
          cancel={() => setAlertGive(false)}
          minus={minusMedicene}
          plus={plusMedicene}
          giveMedicene={giveMedice}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  medicene: state.medicene,
});

const mapDispatchToProps = (dispatch) => ({
  getMedicene: () => dispatch(getMediceneFromAPI()),
  minusMediceneToAPI: (datas, id, minus) =>
    dispatch(minusMediceneToAPI(datas, id, minus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientDocterList);
