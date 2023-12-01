import { useState } from "react";
import InputPassword from "../components/InputPassword";
import ForgetPass from "../components/ForgetPass";
import ButtonForm from "../components/ButonForm";
import OrLogin from "../components/OrLogin";
import InputEmail from "../components/InputEmail";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const tes = () => {
    console.log("helo");
  };
  return (
    <div className="container mx-auto p-10 grid md:grid-cols-4 xl:grid-cols-6 ">
      <div className="md:col-span-2 md:col-start-2 xl:col-start-3">
        <h1 className="text-center text-sky-800 text-3xl font-bold mb-2">
          Masuk
        </h1>
        <InputEmail type={"email"} title={"Email"} />
        <InputPassword showPass={showPass} setShowPass={setShowPass} />
        <ForgetPass to={"/forget"} />
        <ButtonForm title={"Masuk"} action={tes} />
        <OrLogin
          to={"/regis"}
          titleLink={"Daftar"}
          subTitle={"Belum Punya Akun? Ayo"}
        />
      </div>
    </div>
  );
};

export default Login;
