import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, connect } from "react-redux";
import storeRedux from "../config/redux/store/store";

import Home from "./Home";
import Login from "./Login";
import Regis from "./Regis";
import Forget from "./Forget";
import Patient from "./Patient";
import Medicene from "./Medicene";
import NotFound from "./NotFound";
import PatientDoctor from "./PatientDoctor";

const App = () => {
  return (
    <Provider store={storeRedux}>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/regis"} element={<Regis />} />
          <Route path={"/forget"} element={<Forget />} />
          <Route path={"/data-pasien"} element={<Patient />} />
          <Route path={"/data-pasien-dokter"} element={<PatientDoctor />} />
          <Route path={"/data-obat"} element={<Medicene />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
