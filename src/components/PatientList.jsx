import { useState } from "react";
import PatientCard from "./PatientCard";
import MediceneAlertDelete from "./MediceneAlertDelete";
import { Users, SearchX } from "lucide-react";

const PatientList = ({ patients, onDelete, onModeUpdate }) => {
  const [alertDelete, setAlertDelete] = useState(false);
  const [targetDelete, setTargetDelete] = useState("");

  const handleDelete = (id) => { onDelete(id); setAlertDelete(false); };
  const handleEdit = (patient) => { onModeUpdate(patient); };
  const alert = (id) => { setAlertDelete(true); setTargetDelete(id); };

  return (
    <div className="px-4 my-6">
      {patients.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {patients.map((patient) => (
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
              onDelete={() => alert(patient.id)}
              onUpdate={() => handleEdit(patient)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-3">
          <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
            <SearchX className="w-8 h-8 text-muted-foreground/50" />
          </div>
          <p className="font-medium">Belum ada data pasien</p>
          <p className="text-sm">Data pasien akan muncul di sini</p>
        </div>
      )}

      {alertDelete && (
        <MediceneAlertDelete
          action={() => handleDelete(targetDelete)}
          cancel={() => setAlertDelete(false)}
        />
      )}
    </div>
  );
};

export default PatientList;
