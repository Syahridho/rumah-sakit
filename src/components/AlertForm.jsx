const AlertForm = ({ title, status }) => {
  const success =
    "p-3 mb-4 bg-blue-400 text-white rounded border-2 border-blue-500";
  const fail = "p-3 mb-4 bg-red-400 text-white rounded border-2 border-red-500";
  return (
    <div className={status ? success : fail}>
      <h1>{title}</h1>
    </div>
  );
};

export default AlertForm;
