import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { getPatientFromAPI, giveMediceneToAPI } from "../config/redux/action/action";
import PatientDocterList from "../components/PatientDocterList";
import { Stethoscope } from "lucide-react";

const PatientDoctor = ({ user, isAdmin, isDoctor, patients, getPatient, giveMedicene }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isDoctor === false && isAdmin === false) navigate("/");
    if (user === null) navigate("/login");
    getPatient();
  }, []);

  const myPatients = patients.filter((p) => p.data.doctor === user.email);

  const onGive = (datas, medicene, id) => {
    giveMedicene(datas, medicene, id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Page Header */}
      <div className="gradient-primary text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Pasien Saya</h1>
              <p className="text-white/70 text-sm">{myPatients.length} pasien menunggu pemeriksaan</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <PatientDocterList patients={myPatients} onGive={onGive} />
      </div>
    </div>
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
  giveMedicene: (datas, medicene, id) => dispatch(giveMediceneToAPI(datas, medicene, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientDoctor);
