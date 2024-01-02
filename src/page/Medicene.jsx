import { useEffect, useState } from "react";
import MediceneInput from "../components/MediceneInput";
import Navbar from "../components/Navbar";
import {
  addMediceneToAPI,
  deleteMediceneToAPI,
  getMediceneFromAPI,
  updateMediceneToAPI,
} from "../config/redux/action/action";
import { connect } from "react-redux";
import MediceneList from "../components/MediceneList";
import { useNavigate } from "react-router-dom";

const Medicene = ({
  isAdmin,
  medicene,
  addMedicene,
  getMedicene,
  deleteMedicene,
  updateMedicene,
}) => {
  const [inputMedicene, setInputMedicene] = useState({
    id: "",
    title: "",
    stock: "",
  });
  const [unique, setUnique] = useState("");
  const [isUpadete, setIsUpdate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin === false) {
      navigate("/");
    }
    getMedicene();
  }, []);

  const onTitleChange = (e) => {
    setInputMedicene((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const onStockChange = (e) => {
    setInputMedicene((prevState) => ({
      ...prevState,
      stock: e.target.value,
    }));
  };

  const onSubmitAdd = () => {
    const data = {
      id: +new Date(),
      title: inputMedicene.title,
      stock: inputMedicene.stock,
    };
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

  const onUpdate = () => {
    const res = updateMedicene(inputMedicene, unique).catch((error) => error);
    if (res) {
      setIsUpdate(false);
      setInputMedicene({
        id: "",
        title: "",
        stock: "",
      });
    }
  };

  const onModeUpdate = (medic) => {
    setUnique(medic.id);
    setInputMedicene({
      id: medic.data.id,
      title: medic.data.title,
      stock: medic.data.stock,
    });
    setIsUpdate(true);
  };

  const cancelUpdate = () => {
    setInputMedicene({
      id: "",
      title: "",
      stock: "",
    });
    setIsUpdate(false);
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
          updateMedicene={onUpdate}
          isUpdate={isUpadete}
          cancelUpdate={cancelUpdate}
        />
        <MediceneList
          medicene={medicene}
          onDelete={onDelete}
          onUpdateMode={onModeUpdate}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  medicene: state.medicene,
  isAdmin: state.isAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  addMedicene: (data) => dispatch(addMediceneToAPI(data)),
  getMedicene: () => dispatch(getMediceneFromAPI()),
  deleteMedicene: (id) => dispatch(deleteMediceneToAPI(id)),
  updateMedicene: (datas, id) => dispatch(updateMediceneToAPI(datas, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Medicene);
