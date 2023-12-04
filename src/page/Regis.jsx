import { useState } from "react";
import ButtonForm from "../components/ButonForm";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import OrLogin from "../components/OrLogin";
import { registerUserAPI, tes } from "../config/redux/action/action";
import { connect } from "react-redux";
import AlertForm from "../components/AlertForm";

const Regis = ({ isLoading, regisAPI }) => {
  const [showPass, setShowPass] = useState(false);
  const [allReady, setAllReady] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onRegis = async () => {
    setSuccess(false);
    setAllReady(false);
    setInvalidEmail(false);
    setInvalidPassword(false);
    const res = await regisAPI(form).catch((err) => err);
    console.log("regis", res);
    if (res === true) {
      setForm({
        email: "",
        password: "",
      });
      setSuccess(true);
      setAllReady(false);
      setInvalidEmail(false);
      setInvalidPassword(false);
    } else if (res == "auth/email-already-in-use") {
      setSuccess(false);
      setAllReady(true);
      setInvalidEmail(false);
      setInvalidPassword(false);
    } else if (res == "auth/invalid-email") {
      setSuccess(false);
      setAllReady(false);
      setInvalidEmail(true);
      setInvalidPassword(false);
    } else if (res == "auth/weak-password") {
      setSuccess(false);
      setAllReady(false);
      setInvalidEmail(false);
      setInvalidPassword(true);
    }
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
        {success ? (
          <AlertForm title="Akun berhasil dibuat" status={success} />
        ) : null}
        <InputEmail
          type={"email"}
          title={"Email"}
          action={onEmailChange}
          value={form.email}
        />
        {allReady ? (
          <p className="text-xs mb-4 text-red-500">Email sudah digunakan</p>
        ) : null}
        {invalidEmail ? (
          <p className="text-xs mb-4 text-red-500">Email invalid</p>
        ) : null}
        <InputPassword
          showPass={showPass}
          setShowPass={setShowPass}
          action={onPasswordChange}
          value={form.password}
        />
        {invalidPassword ? (
          <p className="text-xs mb-4 text-red-500">
            Gunakan Minimal 6 karakter
          </p>
        ) : (
          <p className="text-xs mb-4">Gunakan Minimal 6 karakter</p>
        )}
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
