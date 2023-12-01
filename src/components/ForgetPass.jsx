import { Link } from "react-router-dom";

const ForgetPass = ({ to }) => {
  return (
    <div className="text-right mb-6 text-sky-800 hover:underline">
      <Link to={to}>Lupa Password?</Link>
    </div>
  );
};

export default ForgetPass;
