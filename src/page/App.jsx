import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Regis from "./Regis";
import Forget from "./Forget";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/regis"} element={<Regis />} />
        <Route path={"/forget"} element={<Forget />} />
        <Route path={"*"} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
