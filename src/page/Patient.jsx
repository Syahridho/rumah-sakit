import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import PatientInput from "../components/PatientInput";
import {
  addPatientToAPI,
  deletePatientToAPI,
  getPatientFromAPI,
  updatePatientToAPI,
} from "../config/redux/action/action";
import { useEffect, useState } from "react";
import PatientList from "../components/PatientList";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";

const Patient = ({ user, isAdmin, patients, addPatient, getPatient, updatePatient, deletePatient }) => {
  const [patient, setPatient] = useState({
    id: "", name: "", gender: "Laki-Laki", date: "", phone: "",
    doctor: "nadia@gmail.com", complaints: "",
  });
  const navigate = useNavigate();
  const [unique, setUnique] = useState("");
  const [isUpdete, setIsUpdate] = useState(false);

  useEffect(() => {
    if (isAdmin === false) navigate("/");
    getPatient();
  }, []);

  const onChangeInput = (e, type) => setPatient((p) => ({ ...p, [type]: e.target.value }));

  const onSubmit = () => {
    const data = {
      id: +new Date(), name: patient.name, gender: patient.gender,
      date: patient.date, phone: patient.phone, doctor: patient.doctor,
      complaints: patient.complaints, email: user.email,
    };
    addPatient(data);
    setPatient({ id: "", name: "", gender: "Laki-Laki", date: "", phone: "", doctor: "nadia@gmail.com", complaints: "" });
  };

  const onUpdate = () => {
    const res = updatePatient(patient, unique).catch((e) => e);
    if (res) { setIsUpdate(false); setPatient({ id: "", name: "", gender: "Laki-Laki", date: "", phone: "", doctor: "nadia@gmail.com", complaints: "" }); }
  };

  const onModeUpdate = (p) => {
    setUnique(p.id);
    setPatient({ id: p.data.id, name: p.data.name, gender: p.data.gender, date: p.data.date, phone: p.data.phone, doctor: p.data.doctor, complaints: p.data.complaints, email: p.data.email, isDone: p.data.isDone, medicene: p.data.medicene });
    setIsUpdate(true);
  };

  const cancelUpdate = () => {
    setPatient({ id: "", name: "", gender: "Laki-Laki", date: "", phone: "", doctor: "nadia@gmail.com", complaints: "" });
    setIsUpdate(false);
  };

  const onDelete = (id) => deletePatient(id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Page Header */}
      <div className="gradient-primary text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Manajemen Pasien</h1>
              <p className="text-white/70 text-sm">{patients.length} pasien terdaftar</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 space-y-8">
        <PatientInput
          name={patient.name} gender={patient.gender} date={patient.date}
          phone={patient.phone} doctor={patient.doctor} complaints={patient.complaints}
          onChange={onChangeInput} onSubmit={onSubmit} onUpdate={onUpdate}
          onCancel={cancelUpdate} isUpdate={isUpdete}
        />
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Daftar Semua Pasien</h2>
            <span className="text-sm text-muted-foreground">{patients.length} data</span>
          </div>
          <PatientList patients={patients} onDelete={onDelete} onModeUpdate={onModeUpdate} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ isAdmin: state.isAdmin, patients: state.patient, user: state.user });
const mapDispatchToProps = (dispatch) => ({
  addPatient: (data) => dispatch(addPatientToAPI(data)),
  getPatient: () => dispatch(getPatientFromAPI()),
  updatePatient: (datas, id) => dispatch(updatePatientToAPI(datas, id)),
  deletePatient: (id) => dispatch(deletePatientToAPI(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Patient);
