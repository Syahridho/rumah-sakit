import { connect } from "react-redux";
import MediceneCard from "./MediceneCard";
import { deleteMediceneToAPI } from "../config/redux/action/action";

const MediceneList = ({ medicene, onDelete }) => {
  console.log(medicene);

  const handleDelete = (id) => {
    onDelete(id);
    console.log(id);
  };

  const handleEdit = (id) => {
    // Implementasi logika edit
    console.log("Edit button clicked for ID:", id);
  };
  return (
    <div className="grid grid-cols-8 lg:grid-cols-6 xl:grid-cols-8 gap-2 px-6 my-8 md:px-0">
      {medicene.length >= 0 ? (
        <>
          {medicene.map((medic) => {
            return (
              <MediceneCard
                key={medic.data.id}
                id={medic.data.id}
                title={medic.data.title}
                stock={medic.data.stock}
                onDelete={() => handleDelete(medic.id)}
                onEdit={() => handleEdit(medic.data.id)}
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

export default MediceneList;
