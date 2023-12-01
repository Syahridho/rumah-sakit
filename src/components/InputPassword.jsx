import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

const InputPassword = ({ showPass, setShowPass }) => {
  return (
    <div className="flex flex-col relative">
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type={showPass ? "text" : "password"}
        className="border mb-2 px-2 py-1"
      />
      <button
        className="absolute right-0 top-6 px-3 py-2"
        onClick={() => setShowPass(!showPass)}
      >
        {showPass ? (
          <PiEyeSlash className="text-slate-500" />
        ) : (
          <PiEyeLight className="text-slate-500" />
        )}
      </button>
    </div>
  );
};

export default InputPassword;
