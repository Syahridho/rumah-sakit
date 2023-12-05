import { useState } from "react";
import InputPassword from "../components/InputPassword";
import ForgetPass from "../components/ForgetPass";
import ButtonForm from "../components/ButtonForm";
import OrLogin from "../components/OrLogin";
import InputEmail from "../components/InputEmail";
import { loginUserAPI, tes } from "../config/redux/action/action";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = ({ isLoading, loginAPI }) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [manyRequest, setManyRequest] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSubmitHandle = async () => {
    setInvalidEmail(false);
    setInvalidPassword(false);
    setManyRequest(false);
    const res = await loginAPI(form).catch((err) => err);

    if (res === true) {
      setForm({
        email: "",
        password: "",
      });
      setInvalidEmail(false);
      setInvalidPassword(false);
      setManyRequest(false);
      navigate("/");
    } else if (res === "auth/invalid-email") {
      setInvalidEmail(true);
      setInvalidPassword(false);
      setManyRequest(false);
    } else if (res === "auth/invalid-credential") {
      setInvalidEmail(false);
      setInvalidPassword(true);
      setManyRequest(false);
    } else if (res === "auth/too-many-requests") {
      setInvalidEmail(false);
      setInvalidPassword(false);
      setManyRequest(true);
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
          Masuk
        </h1>

        <InputEmail
          type={"email"}
          title={"Email"}
          action={onEmailChange}
          value={form.email}
        />
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
          <p className="text-xs mb-4 text-red-500">Password salah</p>
        ) : null}
        {manyRequest ? (
          <p className="text-xs mb-4 text-red-500">
            Terlalu banyak percobaan, coba lagi nanti
          </p>
        ) : null}
        <ForgetPass to={"/forget"} />
        <ButtonForm
          title={"Masuk"}
          action={onSubmitHandle}
          loading={isLoading}
        />
        <OrLogin
          to={"/regis"}
          titleLink={"Daftar"}
          subTitle={"Belum Punya Akun? Ayo"}
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
  loginAPI: (data) => dispatch(loginUserAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
