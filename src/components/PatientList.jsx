import { useState } from "react";
import PatientCard from "./PatientCard";

const PatientList = ({ patients, onDelete, onModeUpdate }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleEdit = (patient) => {
    onModeUpdate(patient);
  };

  return (
    <div className="grid grid-cols-8 lg:grid-cols-6 xl:grid-cols-8 gap-2 px-8 my-8 md:px-0">
      {patients.length > 0 ? (
        <>
          {patients.map((patient) => {
            return (
              <PatientCard
                key={patient.data.id}
                id={patient.data.id}
                name={patient.data.name}
                gender={patient.data.gender}
                date={patient.data.date}
                phone={patient.data.phone}
                doctor={patient.data.doctor}
                complaint={patient.data.complaints}
                isDone={patient.data.isDone}
                onDelete={() => handleDelete(patient.id)}
                onUpdate={() => handleEdit(patient)}
              />
            );
          })}
        </>
      ) : (
        <p>Data Kosong</p>
      )}
    </div>
  );
};

export default PatientList;
