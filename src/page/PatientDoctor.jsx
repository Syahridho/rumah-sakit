import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import PatientList from "../components/PatientList";
import { getPatientFromAPI } from "../config/redux/action/action";

const PatientDoctor = ({ user, isAdmin, isDoctor, patients, getPatient }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isDoctor === false) {
      navigate("/");
    }
    getPatient();
    console.log(patients);
  }, []);
  console.log(patients);
  const onDelete = () => {
    console.log("halo");
  };

  const onModeUpdate = () => {
    console.log("halo as");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="my-8 text-center font-bold text-3xl text-slate-800">
          Data Pasien Anda
        </h1>
        <PatientList
          patients={patients.filter(
            (patient) => patient.data.doctor === user.email
          )}
          onDelete={onDelete}
          onModeUpdate={onModeUpdate}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientDoctor);
