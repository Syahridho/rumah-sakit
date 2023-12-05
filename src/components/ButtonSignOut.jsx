import { FaCircleNotch } from "react-icons/fa6";

const ButtonSignOut = ({ title, action, loading }) => {
  const style =
    "w-20 bg-white py-2 text-red-500 rounded shadow border border-red-500 transition duration-500 hover:bg-red-500 hover:text-white";

  if (loading) {
    <button className={style}>
      Proses <FaCircleNotch className="inline ms-1 animate-spin" />
    </button>;
  }

  return (
    <button className={style} onClick={action}>
      {title}
    </button>
  );
};

export default ButtonSignOut;
