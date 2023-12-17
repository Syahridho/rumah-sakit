import { useState } from "react";
import MediceneAlertDelete from "./MediceneAlertDelete";
import VisitorCard from "./VisitorCard";

const VisitorList = ({ patients, onDelete }) => {
  const [alertDelete, setAlertDelete] = useState(false);
  const [targetDelete, setTargetDelete] = useState("");

  const handleDelete = (targetDelete) => {
    onDelete(targetDelete);
    setAlertDelete(false);
  };

  const alert = (id) => {
    setAlertDelete(true);
    setTargetDelete(id);
    console.log(id);
  };
  return (
    <div className="flex flex-col gap-4 my-12 mx-8 md:mx-60 xl:mx-96">
      {patients.length > 0 ? (
        <>
          {patients.map((patient) => {
            return (
              <VisitorCard
                key={patient.data.id}
                id={patient.data.id}
                name={patient.data.name}
                date={patient.data.date}
                isDone={patient.data.isDone}
                medicene={patient.data.medicene}
                onDelete={() => alert(patient.id)}
              />
            );
          })}
        </>
      ) : null}
      {alertDelete ? (
        <MediceneAlertDelete
          action={() => handleDelete(targetDelete)}
          cancel={() => setAlertDelete(false)}
        />
      ) : null}
    </div>
  );
};

export default VisitorList;
