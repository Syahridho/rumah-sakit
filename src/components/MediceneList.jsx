import { useState } from "react";
import MediceneCard from "./MediceneCard";
import MediceneAlertDelete from "./MediceneAlertDelete";
import { SearchX } from "lucide-react";

const MediceneList = ({ medicene, onDelete, onUpdateMode }) => {
  const [alertDelete, setAlertDelete] = useState(false);
  const [targetDelete, setTargetDelete] = useState("");

  const handleDelete = (id) => { onDelete(id); setAlertDelete(false); };
  const handleEdit = (medic) => { onUpdateMode(medic); };
  const alert = (id) => { setAlertDelete(true); setTargetDelete(id); };

  return (
    <div className="px-4">
      {medicene.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-6">
          {medicene.map((medic) => (
            <MediceneCard
              key={medic.data.id}
              id={medic.data.id}
              title={medic.data.title}
              stock={medic.data.stock}
              onDelete={() => alert(medic.id)}
              onEdit={() => handleEdit(medic)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-3">
          <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
            <SearchX className="w-8 h-8 text-muted-foreground/50" />
          </div>
          <p className="font-medium">Belum ada data obat</p>
          <p className="text-sm">Tambahkan obat menggunakan form di atas</p>
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

export default MediceneList;
