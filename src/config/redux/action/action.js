import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./../../firebase/firebase";

export const tes = () => (dispatch) => {
  dispatch({ type: "TES", value: true });
  console.log("tes");
};

export const registerUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_ISLOADING", value: true });
    console.log(data);
    return createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        resolve(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        reject(errorCode);
      });
  });
};

export const loginUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_ISLOADING", value: true });
    console.log(data);
    return signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const dataUser = {
          email: user.email,
          uid: user.id,
          emailVerified: user.emailVerified,
          refrastToken: user.refreshToken,
        };
        dispatch({ type: "CHANGE_USER", value: dataUser });
        dispatch({ type: "CHANGE_ISLOGIN", value: true });
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        resolve(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        reject(errorCode);
      });
  });
};

export const resetPasswordAPI = (email) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_ISLOADING", value: true });
    console.log(email);
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        resolve(true);
      })
      .catch((error) => {
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        reject(errorCode);
      });
  });
};
