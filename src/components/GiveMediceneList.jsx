import GiveMediceneCard from "./GiveMediceneCard";

const GiveMediceneList = ({ medicenes, addMedicene }) => {
  return (
    <div className="flex flex-col gap-4 h-96 w-full overflow-y-auto">
      {medicenes.length > 0 ? (
        <>
          {medicenes.map((medic) => {
            return (
              <GiveMediceneCard
                id={medic.data.id}
                idFirebase={medic.id}
                key={medic.data.id}
                title={medic.data.title}
                stock={medic.data.stock}
                addMedicene={addMedicene}
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

export default GiveMediceneList;
