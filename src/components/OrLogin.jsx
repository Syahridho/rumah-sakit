import { Link } from "react-router-dom";

const OrLogin = ({ titleLink, to, subTitle }) => {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <hr className="my-8" />
        </div>
        <div className="col-span-1">
          <p className="text-center py-5">atau</p>
        </div>
        <div className="col-span-2">
          <hr className="my-8" />
        </div>
      </div>
      <div className="text-center text-black">
        {subTitle}{" "}
        <Link className="text-sky-800 hover:underline" to={to}>
          {titleLink}
        </Link>
      </div>
    </>
  );
};

export default OrLogin;
