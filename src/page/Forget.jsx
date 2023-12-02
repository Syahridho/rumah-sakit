import { useState } from "react";
import InputEmail from "../components/InputEmail";
import ButtonForm from "../components/ButonForm";

const Forget = () => {
  const [email, setEmail] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const onSubmit = () => {
    console.log("helo");
  };
  return (
    <div className="container mx-auto p-10 grid md:grid-cols-4 xl:grid-cols-6 ">
      <div className="md:col-span-2 md:col-start-2 xl:col-start-3">
        <h1 className="text-center text-sky-800 text-3xl font-bold mb-2">
          Lupa Password
        </h1>
        <InputEmail
          type={"email"}
          title={"Email"}
          action={onEmailChange}
          value={email}
        />
        <p className="text-xs mb-4">Masukkan Alamat Email anda</p>
        <ButtonForm title={"Masuk"} action={onSubmit} />
      </div>
    </div>
  );
};

export default Forget;
