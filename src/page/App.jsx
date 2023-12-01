import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/regis"} element={<Home />} />
        <Route path={"/forget"} element={<Home />} />
        <Route path={"*"} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
