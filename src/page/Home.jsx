import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Hero from "./../components/Hero";
// import Servise from "../components/service";

const Home = ({ user, isLogin, isAdmin }) => {
  console.log(user);
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Servise /> */}
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
