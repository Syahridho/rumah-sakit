import { FaCircleNotch } from "react-icons/fa6";

const ButtonForm = ({ title, action, loading }) => {
  if (loading) {
    return (
      <button
        className="w-full bg-sky-950 py-2 text-white rounded shadow-sm border border-sky-950"
        onClick={action}
      >
        Proses
        <FaCircleNotch className="inline ms-1 animate-spin" />
      </button>
    );
  }
  return (
    <button
      className="w-full bg-sky-800 py-2 text-white rounded shadow-sm border border-sky-800 hover:bg-sky-950"
      onClick={action}
    >
      {title}
    </button>
  );
};

export default ButtonForm;
