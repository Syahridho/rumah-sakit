import { Link } from "react-router-dom";

const ButtonLogin = ({ title, to, inline }) => {
  const signIn =
    "block font-semibold bg-sky-800 text-white border border-sky-800 py-1.5 px-4 rounded transition duration-500 hover:shadow hover:bg-sky-950";
  const signUp =
    "block font-semibold bg-white text-sky-800 border border-sky-800 py-1.5 px-4 rounded transition duration-500 hover:shadow hover:bg-sky-800 hover:text-white";

  return (
    <>
      {inline ? (
        <Link to={to} className={signUp}>
          {title}
        </Link>
      ) : (
        <Link to={to} className={signIn}>
          {title}
        </Link>
      )}
    </>
  );
};

export default ButtonLogin;
