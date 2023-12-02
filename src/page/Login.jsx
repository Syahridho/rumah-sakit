import { useState } from "react";
import InputPassword from "../components/InputPassword";
import ForgetPass from "../components/ForgetPass";
import ButtonForm from "../components/ButonForm";
import OrLogin from "../components/OrLogin";
import InputEmail from "../components/InputEmail";
import { tes } from "../config/redux/action/action";
import { connect } from "react-redux";

const Login = ({ tes, isLoading }) => {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const tess = () => {
    tes();
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
        <InputPassword
          showPass={showPass}
          setShowPass={setShowPass}
          action={onPasswordChange}
          value={form.password}
        />
        <ForgetPass to={"/forget"} />
        <ButtonForm title={"Masuk"} action={tess} loading={isLoading} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
