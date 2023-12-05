import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import logo from "./../assets/logo.png";

const Home = ({ user, isLogin, isAdmin }) => {
  console.log(user);
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 md:p-0">
        <div className="grid grid-cols-2 h-[80vh] items-center md:grid-cols-8">
          <div className="col-span-2 md:col-start-6 md:order-last mx-auto">
            <img
              src={logo}
              alt="logo"
              className="w-72 h-72 drop-shadow-lg md:w-auto md:h-auto"
            />
          </div>
          <div className="col-span-2 md:col-start-2">
            <h1 className="font-bold text-2xl text-sky-800">Rumah Sakit</h1>
            <p className="text-sky-700 mb-3 mt-1">
              Mempermudah anda dalam membuat janji dengan dokter
            </p>
            <button className="bg-sky-800 text-white px-4 py-2 rounded shadow transition duration-500 hover:shadow-xl hover:bg-sky-950">
              Buat Janji
            </button>
          </div>
        </div>
      </div>
      {isLogin ? (
        <>
          <h1>Sudah login</h1> <h1>{user.email}</h1>{" "}
        </>
      ) : (
        <h1>belum login</h1>
      )}
      {isAdmin ? <h1>Halo Admin</h1> : <h1>Halo Pengunjung</h1>}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  isLogin: state.isLogin,
  isAdmin: state.isAdmin,
});

export default connect(mapStateToProps, null)(Home);
