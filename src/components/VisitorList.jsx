import { useState } from "react";
import MediceneAlertDelete from "./MediceneAlertDelete";
import VisitorCard from "./VisitorCard";
import { CalendarX } from "lucide-react";

const VisitorList = ({ patients, onDelete }) => {
  const [alertDelete, setAlertDelete] = useState(false);
  const [targetDelete, setTargetDelete] = useState("");

  const handleDelete = (id) => { onDelete(id); setAlertDelete(false); };
  const alert = (id) => { setAlertDelete(true); setTargetDelete(id); };

  if (patients.length === 0) return null;

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">Janji Anda</h2>
          <p className="text-muted-foreground text-sm mt-1">Pantau status janji dan hasil pemeriksaan Anda</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {patients.map((patient) => (
            <VisitorCard
              key={patient.data.id}
              id={patient.data.id}
              name={patient.data.name}
              date={patient.data.date}
              isDone={patient.data.isDone}
              medicene={patient.data.medicene}
              onDelete={() => alert(patient.id)}
              data={patient}
            />
          ))}
        </div>
      </div>
      {alertDelete && (
        <MediceneAlertDelete
          action={() => handleDelete(targetDelete)}
          cancel={() => setAlertDelete(false)}
        />
      )}
    </section>
  );
};

export default VisitorList;
