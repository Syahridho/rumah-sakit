import { useState } from "react";
import ButtonForm from "../components/ButonForm";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import OrLogin from "../components/OrLogin";
import { registerUserAPI, tes } from "../config/redux/action/action";
import { connect } from "react-redux";

const Regis = ({ tes, isLoading, regisAPI }) => {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onRegis = () => {
    regisAPI(form);
  };

  const onEmailChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
    console.log(form);
  };

  const onPasswordChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
    console.log(form);
  };

  return (
    <div className="container mx-auto p-10 grid md:grid-cols-4 xl:grid-cols-6 ">
      <div className="md:col-span-2 md:col-start-2 xl:col-start-3">
        <h1 className="text-center text-sky-800 text-3xl font-bold mb-2">
          Daftar
        </h1>
        <InputEmail
          type={"email"}
          title={"Email"}
          action={onEmailChange}
          value={form.email}
        />
        <InputPassword
          showPass={showPass}
          setShowPass={setShowPass}
          action={onPasswordChange}
          value={form.password}
        />
        <p className="text-xs mb-4">Gunakan Minimal 8 karakter</p>
        <ButtonForm title={"Daftar"} action={onRegis} loading={isLoading} />
        <OrLogin
          to={"/login"}
          titleLink={"Masuk"}
          subTitle={"Sudah Punya Akun? Ayo"}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  tes: () => dispatch(tes()),
  regisAPI: (data) => dispatch(registerUserAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Regis);
