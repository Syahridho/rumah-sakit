import { connect } from "react-redux";
import Navbar from "../components/Navbar";

const Home = ({ user, isLogin }) => {
  console.log(user);
  return (
    <>
      <Navbar />

      {isLogin ? (
        <>
          <h1>Sudah login</h1> <h1>{user.email}</h1>{" "}
        </>
      ) : (
        <h1>belum login</h1>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  isLogin: state.isLogin,
});

export default connect(mapStateToProps, null)(Home);
