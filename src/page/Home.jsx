import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Hero from "./../components/Hero";
import PatientInput from "../components/PatientInput";
import { useState } from "react";
import { addPatientToAPI } from "../config/redux/action/action";
import Footer from "../components/Footer";
import Desc from "../components/Desc";

const Home = ({ user, isLogin, isAdmin, addPatient }) => {
  const [patient, setPatient] = useState({
    id: "",
    name: "",
    gender: "Laki-Laki",
    date: "",
    phone: "",
    doctor: "Dr. Nadia Arifin (Umum)",
    complaints: "",
  });

  const [alertLogin, setAlertLogin] = useState(false);

  const onChangeInput = (e, type) => {
    setPatient((prevState) => ({
      ...prevState,
      [type]: e.target.value,
    }));
    console.log(patient);
  };

  const onSubmit = () => {
    setAlertLogin(false);
    if (isLogin) {
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

  return (
    <>
      <Navbar />
      <Hero />
      <Desc isAdmin={isAdmin} />
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
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  isLogin: state.isLogin,
  isAdmin: state.isAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  addPatient: (data) => dispatch(addPatientToAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
