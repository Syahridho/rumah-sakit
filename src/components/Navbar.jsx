import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { signOutAPI, checkLogin } from "../config/redux/action/action";
import { connect } from "react-redux";
import ButtonLogin from "./ButtonLogin";
import ButtonSignOut from "./ButtonSignOut";
import { NavLink } from "react-router-dom";

const Navbar = ({ isLoading, isLogin, isAdmin, checkLogin, signOut }) => {
  const [navOn, setNavOn] = useState(true);

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("dataUser"));
    checkLogin(userLocal);
    console.log(userLocal);
    const handleResize = () => {
      setNavOn(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onHandleSignOut = async () => {
    const res = await signOut().catch((error) => error);

    if (res === false) {
      console.log(res);
    }
  };

  return (
    <div className="bg-white sticky top-0 z-10 flex flex-col justify-between items-center shadow md:flex-row md:px-12 xl:px-32 ">
      <div className="py-2 px-7 w-full flex justify-between items-center shadow md:shadow-none md:py-6 md:w-auto">
        <h1 className="font-extrabold text-blue-900 text-xl shadow-inherit">
          Rumah Sakit
        </h1>
        <button className="p-2 md:hidden" onClick={() => setNavOn(!navOn)}>
          {navOn ? (
            <FiX className="w-7 h-7" />
          ) : (
            <FiMenu className="w-7 h-7 " />
          )}
        </button>
      </div>
      {navOn ? (
        <div className="mt-1 md:mt-0 xl:me-10">
          <ul className="text-blue-900 flex flex-col items-center gap-1 md:flex-row md:gap-7">
            <li>
              <a
                href="#"
                className="w-screen text-center bg-stone-50 block py-4 md:w-auto md:bg-transparent md:p-0"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-screen text-center bg-stone-50 block py-4 md:w-auto md:bg-transparent md:p-0"
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-screen text-center bg-stone-50 block py-4 md:w-auto md:bg-transparent md:p-0"
              >
                Contact
              </a>
            </li>
            {isAdmin ? (
              <>
                <NavLink
                  to={"/data-pasien"}
                  className="w-screen text-center bg-stone-50 block py-4 md:w-auto md:bg-transparent md:p-0"
                >
                  Data Pasien
                </NavLink>
                <NavLink
                  to={"/data-obat"}
                  className="w-screen text-center bg-stone-50 block py-4 md:w-auto md:bg-transparent md:p-0"
                >
                  Data Obat
                </NavLink>
              </>
            ) : null}

            <li className="flex gap-2 py-8 md:py-0">
              {isLogin ? (
                <ButtonSignOut
                  title={"Keluar"}
                  action={onHandleSignOut}
                  loading={isLoading}
                />
              ) : (
                <>
                  <ButtonLogin title={"Masuk"} to={"/login"} inline={false} />
                  <ButtonLogin title={"Daftar"} to={"/regis"} inline={"true"} />
                </>
              )}
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  isLogin: state.isLogin,
  isAdmin: state.isAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
  checkLogin: (user) => dispatch(checkLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
