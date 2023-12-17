import { useState } from "react";
import PatientDocterCard from "./PatientDocterCard";
import GiveMedicene from "./GiveMedicene";

const PatientDocterList = ({ patients, onGive }) => {
  const [alertGive, setAlertGive] = useState(false);
  const [target, setTarget] = useState("");
  const [nameTarget, setNameTarget] = useState("");
  const [complaintTarget, setComplaintTarget] = useState("");
  const [data, setData] = useState();

  const [medicene, setMedicene] = useState("");

  const alert = (id, name, complaint, data) => {
    setData(data);
    setAlertGive(true);
    setNameTarget(name);
    setComplaintTarget(complaint);
    setTarget(id);
    console.log(data);
  };

  const onChange = (e) => {
    setMedicene(e.target.value);
  };

  const onSubmit = () => {
    onGive(data, medicene, target);
    setAlertGive(false);
    setMedicene("");
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
                    patient.data
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
          complaint={complaintTarget}
          action={() => onSubmit()}
          cancel={() => setAlertGive(false)}
          onChange={(e) => onChange(e)}
          value={medicene}
        />
      ) : null}
    </div>
  );
};

export default PatientDocterList;
