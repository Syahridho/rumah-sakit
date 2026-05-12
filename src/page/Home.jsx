import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Hero from "./../components/Hero";
import PatientInput from "../components/PatientInput";
import { useEffect, useState } from "react";
import {
  addPatientToAPI, deletePatientToAPI, getPatientFromAPI,
} from "../config/redux/action/action";
import Footer from "../components/Footer";
import Desc from "../components/Desc";
import VisitorList from "../components/VisitorList";
import { CalendarCheck } from "lucide-react";

const Home = ({ user, isLogin, isAdmin, patients, addPatient, isDoctor, getPatient, deletePatient }) => {
  const [patient, setPatient] = useState({
    id: "", name: "", gender: "Laki-Laki", date: "", phone: "",
    doctor: "nadia@gmail.com", complaints: "",
  });

  useEffect(() => { getPatient(); }, []);

  const [alertLogin, setAlertLogin] = useState(false);

  const onChangeInput = (e, type) => setPatient((p) => ({ ...p, [type]: e.target.value }));

  const onSubmit = () => {
    setAlertLogin(false);
    if (isLogin) {
      alert("Janji Berhasil dibuat!!");
      const data = {
        id: +new Date(), name: patient.name, gender: patient.gender,
        date: patient.date, phone: patient.phone, doctor: patient.doctor,
        complaints: patient.complaints, email: user.email,
      };
      addPatient(data);
      setPatient({ id: "", name: "", gender: "Laki-Laki", date: "", phone: "", doctor: "nadia@gmail.com", complaints: "" });
    } else {
      setAlertLogin(true);
    }
  };

  const onDelete = (id) => deletePatient(id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Desc isAdmin={isAdmin} isDoctor={isDoctor} />

      {/* Appointment section */}
      {!isDoctor && (
        <section id="buat-janji" className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                <CalendarCheck className="w-3.5 h-3.5" />
                Buat Janji
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                Daftarkan Janji Anda
              </h2>
              <p className="text-muted-foreground mt-2 max-w-md mx-auto text-sm">
                Isi formulir di bawah untuk membuat janji dengan dokter pilihan Anda
              </p>
            </div>
            <PatientInput
              alertLogin={alertLogin}
              name={patient.name} gender={patient.gender} date={patient.date}
              phone={patient.phone} doctor={patient.doctor} complaints={patient.complaints}
              onChange={onChangeInput} onSubmit={onSubmit}
            />
          </div>
        </section>
      )}

      <VisitorList
        patients={patients.filter((p) => p.data.email === user.email)}
        onDelete={onDelete}
      />

      <Footer />
    </div>
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
