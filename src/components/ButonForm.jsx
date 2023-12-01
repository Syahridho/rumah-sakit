const ButtonForm = ({ title, action }) => {
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
