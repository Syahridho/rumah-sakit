import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { auth, database } from "./../../firebase/firebase";

import { onValue, push, ref, remove, set } from "firebase/database";

export const tes = () => (dispatch) => {
  dispatch({ type: "TES", value: true });
};

export const registerUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_ISLOADING", value: true });
    return createUserWithEmailAndPassword(auth, data.email, data.password)
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
        reject(errorCode);
      });
  });
};

export const loginUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_ISLOADING", value: true });
    return signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        const dataUser = {
          email: user.email,
          uid: user.id,
          emailVerified: user.emailVerified,
          refrastToken: user.refreshToken,
        };

        switch (user.email) {
          case "admin@gmail.com":
            dispatch({ type: "CHANGE_ISADMIN", value: true });
            break;
          case "nadia@gmail.com":
            dispatch({ type: "CHANGE_ISDOCTOR", value: true });
            break;
          case "adrian@gmail.com":
            dispatch({ type: "CHANGE_ISDOCTOR", value: true });
            break;
          case "lina@gmail.com":
            dispatch({ type: "CHANGE_ISDOCTOR", value: true });
            break;
          case "raditya@gmail.com":
            dispatch({ type: "CHANGE_ISDOCTOR", value: true });
            break;
          case "anita@gmail.com":
            dispatch({ type: "CHANGE_ISDOCTOR", value: true });
            break;
          case "farid@gmail.com":
            dispatch({ type: "CHANGE_ISDOCTOR", value: true });
            break;
          case "amanda@gmail.com":
            dispatch({ type: "CHANGE_ISDOCTOR", value: true });
            break;
          case "dian@gmail.com":
            dispatch({ type: "CHANGE_ISDOCTOR", value: true });
            break;
          default:
            dispatch({ type: "CHANGE_ISDOCTOR", value: false });
            dispatch({ type: "CHANGE_ISADMIN", value: false });
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
        dispatch({ type: "CHANGE_ISDOCTOR", value: false });
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

export const getMediceneFromAPI = () => (dispatch) => {
  const url = ref(database, "medicene/");
  return new Promise((resolve, reject) => {
    onValue(url, (snapShot) => {
      if (snapShot.val() !== null) {
        const data = [];
        Object.keys(snapShot.val()).map((key) => {
          data.push({
            id: key,
            data: snapShot.val()[key],
          });
        });
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
        console.log("id hapus", id);
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

export const updateMediceneToAPI = (datas, id) => (dispatch) => {
  const db = database;
  const url = ref(db, "medicene/" + id);
  return new Promise((resolve, reject) => {
    set(url, {
      id: datas.id,
      title: datas.title,
      stock: datas.stock,
    })
      .then(() => {
        console.log("berhasil update");
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

export const addPatientToAPI = (data) => (dispatch) => {
  const db = database;
  push(ref(db, "patient/"), {
    id: data.id,
    name: data.name,
    gender: data.gender,
    date: data.date,
    phone: data.phone,
    doctor: data.doctor,
    complaints: data.complaints,
    email: data.email,
    isDone: false,
    medicene: "",
  })
    .then(() => {
      console.log("berhasil");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPatientFromAPI = () => async (dispatch) => {
  const url = ref(database, "patient/");
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
        dispatch({ type: "CHANGE_PATIENT", value: data });
      }
      resolve(snapShot.val());
    });
  });
};

export const updatePatientToAPI = (datas, id) => (dispatch) => {
  const db = database;
  const url = ref(db, "patient/" + id);
  return new Promise((resolve, reject) => {
    set(url, {
      id: datas.id,
      name: datas.name,
      gender: datas.gender,
      date: datas.date,
      phone: datas.phone,
      doctor: datas.doctor,
      complaints: datas.complaints,
      email: datas.email,
      isDone: false,
      medicene: "",
    })
      .then(() => {
        console.log("berhasil update");
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

export const deletePatientToAPI = (id) => (dispatch) => {
  const db = database;
  const url = ref(db, "patient/" + id);
  return new Promise((resolve, reject) => {
    remove(url)
      .then(() => {
        console.log("id hapus", id);
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

export const giveMediceneToAPI = (datas, medicene, id) => (dispatch) => {
  const db = database;
  console.log("datas", datas);
  console.log("medicene", medicene);
  console.log("id", id);
  const url = ref(db, "patient/" + id);
  return new Promise((resolve, reject) => {
    set(url, {
      id: datas.id,
      name: datas.name,
      gender: datas.gender,
      date: datas.date,
      phone: datas.phone,
      doctor: datas.doctor,
      complaints: datas.complaints,
      email: datas.email,
      isDone: true,
      medicene: medicene,
    })
      .then(() => {
        console.log("berhasil update");
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

export const minusMediceneToAPI = (datas, stock) => (dispatch) => {
  const db = database;
  const url = ref(db, "medicene/" + datas.id);

  return new Promise((resolve, reject) => {
    set(url, {
      id: datas.id,
      title: datas.title,
      stock: (stock - datas.qty).toString(),
    })
      .then(() => {
        console.log("berhasil update");
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
