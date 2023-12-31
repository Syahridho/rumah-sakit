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

const Patient = ({
  user,
  isAdmin,
  patients,
  addPatient,
  getPatient,
  updatePatient,
  deletePatient,
}) => {
  const [patient, setPatient] = useState({
    id: "",
    name: "",
    gender: "Laki-Laki",
    date: "",
    phone: "",
    doctor: "Dr. Nadia Arifin (Umum)",
    complaints: "",
  });
  const navigate = useNavigate();
  const [unique, setUnique] = useState("");
  const [isUpdete, setIsUpdate] = useState(false);

  useEffect(() => {
    if (isAdmin === false) {
      navigate("/");
    }
    getPatient();
  }, []);

  const onChangeInput = (e, type) => {
    setPatient((prevState) => ({
      ...prevState,
      [type]: e.target.value,
    }));
  };

  const onSubmit = () => {
    const data = {
      id: +new Date(),
      name: patient.name,
      gender: patient.gender,
      date: patient.date,
      phone: patient.phone,
      doctor: patient.doctor,
      complaints: patient.complaints,
      email: user.email,
    };
    addPatient(data);
    setPatient({
      id: "",
      name: "",
      gender: "",
      date: "",
      phone: "",
      doctor: "",
      complaints: "",
    });
  };

  const onUpdate = () => {
    const res = updatePatient(patient, unique).catch((error) => error);
    if (res) {
      setIsUpdate(false);
      setPatient({
        id: "",
        name: "",
        gender: "Laki-Laki",
        date: "",
        phone: "",
        doctor: "Dr. Nadia Arifin (Umum)",
        complaints: "",
      });
    }
  };

  const onModeUpdate = (patient) => {
    setUnique(patient.id);
    setPatient({
      id: patient.data.id,
      name: patient.data.name,
      gender: patient.data.gender,
      date: patient.data.date,
      phone: patient.data.phone,
      doctor: patient.data.doctor,
      complaints: patient.data.complaints,
      email: patient.data.email,
      isDone: patient.data.isDone,
      medicene: patient.data.medicene,
    });
    setIsUpdate(true);
  };

  const cancelUpdate = () => {
    setPatient({
      id: "",
      name: "",
      gender: "Laki-Laki",
      date: "",
      phone: "",
      doctor: "Dr. Nadia Arifin (Umum)",
      complaints: "",
    });
    setIsUpdate(false);
  };

  const onDelete = (id) => {
    deletePatient(id);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="my-8 text-center font-bold text-3xl text-slate-800">
          Data Pasien
        </h1>
        <PatientInput
          name={patient.name}
          gender={patient.gender}
          date={patient.date}
          phone={patient.phone}
          doctor={patient.doctor}
          complaints={patient.complaints}
          onChange={onChangeInput}
          onSubmit={onSubmit}
          onUpdate={onUpdate}
          onCancel={cancelUpdate}
          isUpdate={isUpdete}
        />
        <h1 className="my-8 text-center font-bold text-3xl text-slate-800">
          Data List Pasien
        </h1>
        <PatientList
          patients={patients}
          onDelete={onDelete}
          onModeUpdate={onModeUpdate}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.isAdmin,
  patients: state.patient,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  addPatient: (data) => dispatch(addPatientToAPI(data)),
  getPatient: () => dispatch(getPatientFromAPI()),
  updatePatient: (datas, id) => dispatch(updatePatientToAPI(datas, id)),
  deletePatient: (id) => dispatch(deletePatientToAPI(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Patient);
