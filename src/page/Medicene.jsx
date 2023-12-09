import { useEffect, useState } from "react";
import MediceneInput from "../components/MediceneInput";
import Navbar from "../components/Navbar";
import {
  addMediceneToAPI,
  deleteMediceneToAPI,
  getMediceneFromAPI,
} from "../config/redux/action/action";
import { connect } from "react-redux";
import MediceneList from "../components/MediceneList";

const Medicene = ({ medicene, addMedicene, getMedicene, deleteMedicene }) => {
  const [inputMedicene, setInputMedicene] = useState({
    id: "",
    title: "",
    stock: "",
  });

  useEffect(() => {
    getMedicene();
    console.log("page", medicene);
  }, []);

  const onTitleChange = (e) => {
    setInputMedicene((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
    console.log(inputMedicene.title);
  };

  const onStockChange = (e) => {
    setInputMedicene((prevState) => ({
      ...prevState,
      stock: e.target.value,
    }));
    console.log(inputMedicene.stock);
  };

  const onSubmitAdd = () => {
    const data = {
      id: +new Date(),
      title: inputMedicene.title,
      stock: inputMedicene.stock,
    };
    console.log(data);
    addMedicene(data);
    setInputMedicene({
      id: "",
      title: "",
      stock: "",
    });
  };

  const onDelete = (id) => {
    deleteMedicene(id);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="my-8 text-center font-bold text-3xl text-slate-800">
          Data Obat
        </h1>
        <MediceneInput
          title={inputMedicene.title}
          stock={inputMedicene.stock}
          titleChange={onTitleChange}
          stockChange={onStockChange}
          addMedicene={onSubmitAdd}
        />
        <MediceneList medicene={medicene} onDelete={onDelete} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  medicene: state.medicene,
});

const mapDispatchToProps = (dispatch) => ({
  addMedicene: (data) => dispatch(addMediceneToAPI(data)),
  getMedicene: () => dispatch(getMediceneFromAPI()),
  deleteMedicene: (id) => dispatch(deleteMediceneToAPI(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Medicene);
