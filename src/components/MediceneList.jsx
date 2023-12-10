import MediceneCard from "./MediceneCard";
import MediceneAlertDelete from "../components/MediceneAlertDelete";
import { useState } from "react";

const MediceneList = ({ medicene, onDelete, onUpdateMode }) => {
  const [alertDelete, setAlertDelete] = useState(false);
  const [targetDelete, setTargetDelete] = useState("");

  const handleDelete = (targetDelete) => {
    onDelete(targetDelete);
    setAlertDelete(false);
  };

  const handleEdit = (medic) => {
    onUpdateMode(medic);
  };

  const alert = (id) => {
    setAlertDelete(true);
    setTargetDelete(id);
    console.log(id);
  };

  return (
    <div>
      <div className="grid grid-cols-8 lg:grid-cols-6 xl:grid-cols-8 gap-2 px-8 my-8 md:px-0">
        {medicene.length > 0 ? (
          <>
            {medicene.map((medic) => {
              return (
                <MediceneCard
                  key={medic.data.id}
                  id={medic.data.id}
                  title={medic.data.title}
                  stock={medic.data.stock}
                  onDelete={() => alert(medic.id)}
                  onEdit={() => handleEdit(medic)}
                />
              );
            })}
          </>
        ) : (
          <p>Data Kosong</p>
        )}
      </div>

      {alertDelete ? (
        <MediceneAlertDelete
          action={() => handleDelete(targetDelete)}
          cancel={() => setAlertDelete(false)}
        />
      ) : null}
    </div>
  );
};

export default MediceneList;
