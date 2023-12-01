const InputEmail = ({ title, type }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={type}>{title}</label>
      <input type={type} name={type} className="border mb-2 px-2 py-1" />
    </div>
  );
};

export default InputEmail;
