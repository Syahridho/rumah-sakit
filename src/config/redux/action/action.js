import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { auth, database } from "./../../firebase/firebase";

import { onValue, push, ref, remove } from "firebase/database";

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
        if (user.email === "admin@gmail.com") {
          dispatch({ type: "CHANGE_ISADMIN", value: true });
        }
        localStorage.setItem("dataUser", JSON.stringify(dataUser));
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

export const signOutAPI = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_ISLOADING", value: true });
    return signOut(auth)
      .then(() => {
        dispatch({ type: "CHANGE_USER", value: {} });
        dispatch({ type: "CHANGE_ISLOGIN", value: false });
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        dispatch({ type: "CHANGE_ISADMIN", value: false });
        localStorage.removeItem("dataUser");
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

export const checkLogin = (user) => (dispatch) => {
  if (user === null) {
    dispatch({ type: "CHANGE_ISLOGIN", value: false });
    dispatch({ type: "CHANGE_ISADMIN", value: false });
  } else {
    if (user.email === "admin@gmail.com") {
      dispatch({ type: "CHANGE_ISADMIN", value: true });
    }
    dispatch({ type: "CHANGE_ISLOGIN", value: true });
    dispatch({ type: "CHANGE_USER", value: user });
  }
};

export const addMediceneToAPI = (data) => (dispatch) => {
  const db = database;
  push(ref(db, "medicene/"), {
    id: data.id,
    title: data.title,
    stock: data.stock,
  });
};

export const getMediceneFromAPI = () => async (dispatch) => {
  const url = ref(database, "medicene/");
  return await new Promise((resolve, reject) => {
    onValue(url, (snapShot) => {
      if (snapShot.val() !== null) {
        const data = [];
        Object.keys(snapShot.val()).map((key) => {
          data.push({
            id: key,
            data: snapShot.val()[key],
          });
        });
        console.log("action", data);
        dispatch({ type: "CHANGE_MEDICENE", value: data });
      }
      resolve(snapShot.val());
    });
  });
};

export const deleteMediceneToAPI = (id) => (dispatch) => {
  const db = database;
  const url = ref(db, "medicene/" + id);
  return new Promise((resolve, reject) => {
    remove(url)
      .then(() => {
        console.log("berhasil");
        resolve(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        reject(errorCode);
      });
  });
};
