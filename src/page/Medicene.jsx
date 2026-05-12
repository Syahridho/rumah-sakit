import { useEffect, useState } from "react";
import MediceneInput from "../components/MediceneInput";
import Navbar from "../components/Navbar";
import {
  addMediceneToAPI, deleteMediceneToAPI,
  getMediceneFromAPI, updateMediceneToAPI,
} from "../config/redux/action/action";
import { connect } from "react-redux";
import MediceneList from "../components/MediceneList";
import { useNavigate } from "react-router-dom";
import { Pill } from "lucide-react";

const Medicene = ({ isAdmin, medicene, addMedicene, getMedicene, deleteMedicene, updateMedicene }) => {
  const [inputMedicene, setInputMedicene] = useState({ id: "", title: "", stock: "" });
  const [unique, setUnique] = useState("");
  const [isUpadete, setIsUpdate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin === false) navigate("/");
    getMedicene();
  }, []);

  const onTitleChange = (e) => setInputMedicene((p) => ({ ...p, title: e.target.value }));
  const onStockChange = (e) => setInputMedicene((p) => ({ ...p, stock: e.target.value }));

  const onSubmitAdd = () => {
    addMedicene({ id: +new Date(), title: inputMedicene.title, stock: inputMedicene.stock });
    setInputMedicene({ id: "", title: "", stock: "" });
  };

  const onDelete = (id) => deleteMedicene(id);

  const onUpdate = () => {
    const res = updateMedicene(inputMedicene, unique).catch((e) => e);
    if (res) { setIsUpdate(false); setInputMedicene({ id: "", title: "", stock: "" }); }
  };

  const onModeUpdate = (medic) => {
    setUnique(medic.id);
    setInputMedicene({ id: medic.data.id, title: medic.data.title, stock: medic.data.stock });
    setIsUpdate(true);
  };

  const cancelUpdate = () => { setInputMedicene({ id: "", title: "", stock: "" }); setIsUpdate(false); };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Page Header */}
      <div className="gradient-primary text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Pill className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Manajemen Obat</h1>
              <p className="text-white/70 text-sm">{medicene.length} jenis obat terdaftar</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 space-y-6">
        <MediceneInput
          title={inputMedicene.title} stock={inputMedicene.stock}
          titleChange={onTitleChange} stockChange={onStockChange}
          addMedicene={onSubmitAdd} updateMedicene={onUpdate}
          isUpdate={isUpadete} cancelUpdate={cancelUpdate}
        />
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Daftar Obat</h2>
            <span className="text-sm text-muted-foreground">{medicene.length} item</span>
          </div>
          <MediceneList medicene={medicene} onDelete={onDelete} onUpdateMode={onModeUpdate} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ isLoading: state.isLoading, medicene: state.medicene, isAdmin: state.isAdmin });
const mapDispatchToProps = (dispatch) => ({
  addMedicene: (data) => dispatch(addMediceneToAPI(data)),
  getMedicene: () => dispatch(getMediceneFromAPI()),
  deleteMedicene: (id) => dispatch(deleteMediceneToAPI(id)),
  updateMedicene: (datas, id) => dispatch(updateMediceneToAPI(datas, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Medicene);
