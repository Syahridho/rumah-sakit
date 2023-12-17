import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import {
  getPatientFromAPI,
  giveMediceneToAPI,
} from "../config/redux/action/action";
import PatientDocterList from "../components/PatientDocterList";

const PatientDoctor = ({
  user,
  isAdmin,
  isDoctor,
  patients,
  getPatient,
  giveMedicene,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isDoctor === false && isAdmin === false) {
      navigate("/");
    }

    if (user === null) {
      navigate("/login");
    }
    getPatient();
  }, []);

  const onGive = (datas, medicene, id) => {
    giveMedicene(datas, medicene, id);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="my-8 text-center font-bold text-3xl text-slate-800">
          Data Pasien Anda
        </h1>
        <PatientDocterList
          patients={patients.filter(
            (patient) => patient.data.doctor === user.email
          )}
          onGive={onGive}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  isAdmin: state.isAdmin,
  isDoctor: state.isDoctor,
  patients: state.patient,
});

const mapDispatchToProps = (dispatch) => ({
  getPatient: () => dispatch(getPatientFromAPI()),
  giveMedicene: (datas, medicene, id) =>
    dispatch(giveMediceneToAPI(datas, medicene, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientDoctor);
