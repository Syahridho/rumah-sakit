import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebase/firebase";

export const tes = () => (dispatch) => {
  dispatch({ type: "TES", value: true });
  console.log("tes");
};

export const registerUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_ISLOADING", value: true });
    console.log(data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        resolve(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        reject(false);
      });
  });
};
