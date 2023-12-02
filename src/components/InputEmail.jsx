const InputEmail = ({ title, type, action, value }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={type}>{title}</label>
      <input
        type={type}
        name={type}
        value={value}
        onChange={(e) => action(e)}
        className="border mb-2 px-2 py-1"
        placeholder="Alamat Email"
      />
    </div>
  );
};

export default InputEmail;
