import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Hero from "./../components/Hero";
import PatientInput from "../components/PatientInput";
import { useEffect, useState } from "react";
import {
  addPatientToAPI,
  deletePatientToAPI,
  getPatientFromAPI,
} from "../config/redux/action/action";
import Footer from "../components/Footer";
import Desc from "../components/Desc";
import VisitorList from "../components/VisitorList";

const Home = ({
  user,
  isLogin,
  isAdmin,
  patients,
  addPatient,
  isDoctor,
  getPatient,
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

  useEffect(() => {
    getPatient();
  }, []);

  const [alertLogin, setAlertLogin] = useState(false);

  const onChangeInput = (e, type) => {
    setPatient((prevState) => ({
      ...prevState,
      [type]: e.target.value,
    }));
  };

  const onSubmit = () => {
    setAlertLogin(false);
    if (isLogin) {
      alert("Janji Berhasil dibuat !!");
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
    } else {
      setAlertLogin(true);
    }
  };

  const onDelete = (id) => {
    deletePatient(id);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Desc isAdmin={isAdmin} isDoctor={isDoctor} />
      <h1 className="my-8 text-center font-bold text-3xl text-slate-800">
        Buat Janji
      </h1>

      <PatientInput
        alertLogin={alertLogin}
        name={patient.name}
        gender={patient.gender}
        date={patient.date}
        phone={patient.phone}
        doctor={patient.doctor}
        complaints={patient.complaints}
        onChange={onChangeInput}
        onSubmit={onSubmit}
      />
      {isDoctor ? null : (
        <VisitorList
          patients={patients.filter(
            (patient) => patient.data.email === user.email
          )}
          onDelete={onDelete}
        />
      )}

      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  isLogin: state.isLogin,
  isAdmin: state.isAdmin,
  isDoctor: state.isDoctor,
  patients: state.patient,
});

const mapDispatchToProps = (dispatch) => ({
  addPatient: (data) => dispatch(addPatientToAPI(data)),
  getPatient: () => dispatch(getPatientFromAPI()),
  deletePatient: (id) => dispatch(deletePatientToAPI(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
