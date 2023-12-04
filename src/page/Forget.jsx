import { useState } from "react";
import InputEmail from "../components/InputEmail";
import ButtonForm from "../components/ButonForm";
import { resetPasswordAPI } from "../config/redux/action/action";
import { connect } from "react-redux";
import AlertForm from "../components/AlertForm";
import OrLogin from "../components/OrLogin";

const Forget = ({ isLoading, resesPassword }) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const onSubmit = async () => {
    setSuccess(false);
    setFail(false);
    const res = await resesPassword(email).catch((err) => err);

    if (res === true) {
      setSuccess(true);
      setFail(false);
    } else if (res === "auth/too-many-requests") {
      setSuccess(false);
      setFail(true);
    }
  };
  return (
    <div className="container mx-auto p-10 grid md:grid-cols-4 xl:grid-cols-6 ">
      <div className="md:col-span-2 md:col-start-2 xl:col-start-3">
        <h1 className="text-center text-sky-800 text-3xl font-bold mb-2">
          Lupa Password
        </h1>
        {success ? (
          <AlertForm title={"Silahkan cek email anda"} status={success} />
        ) : null}
        {fail ? (
          <AlertForm
            title={"Terlalu banyak percobaan, coba lagi nanti"}
            status={!fail}
          />
        ) : null}
        <InputEmail
          type={"email"}
          title={"Email"}
          action={onEmailChange}
          value={email}
        />
        <p className="text-xs mb-4">Masukkan Alamat Email anda</p>
        <ButtonForm title={"Masuk"} action={onSubmit} loading={isLoading} />
        <OrLogin
          to={"/login"}
          titleLink={"Masuk"}
          subTitle={"Sudah ganti password? Ayo"}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  resesPassword: (email) => dispatch(resetPasswordAPI(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forget);
