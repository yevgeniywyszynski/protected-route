import React, { useState } from "react";
import { Facebook } from "@mui/icons-material";
import styles from "./Login.module.scss";
import { login } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  window.localStorage.clear();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const user = useSelector((state) => state.user.userState);
  console.log("userRedux", user);

  const handleLogin = (event) => {
    event.preventDefault();
    let newObj = {
      userEmail: userEmail,
      userPassword: userPassword,
    };
    dispatch(login(newObj));
    navigate("/");
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <div className={styles.left}>
          <img
            className={styles.phoneScreen}
            src="img/phone.png"
            alt="phoneScreen"
          />
        </div>

        <div className={styles.right}>
          <form className={styles.lInputContainer}>
            <div className={styles.logoWrapper}>
              <img
                className={styles.logo}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
                alt="logo"
              />
            </div>
            <input
              className={styles.loginInput}
              type="email"
              placeholder="Email or phone number"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
              className={styles.loginInput}
              type="password"
              placeholder="Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <button onClick={(e) => handleLogin(e)} className={styles.loginBtn}>
              Log In
            </button>

            <div className={styles.faceBookWrapper}>
              <Facebook className={styles.facebookIcon} />
              <span className={styles.titleFacebook}>Log in with Facebook</span>
            </div>
            <span className={styles.subtitleFacebook}>Forgot password?</span>
          </form>

          <div className={styles.lRegisterWrapper}>
            <span className={styles.register}>
              Don't have an account? <b>Sign up</b>
            </span>
          </div>

          <p>Get the app</p>

          <div className={styles.storeWrapper}>
            <img
              className={styles.storeIcon}
              src="img/appstore.png"
              alt="Appstore"
            ></img>
            <img
              className={styles.storeIcon}
              src="img/android.png"
              alt="AndroidStore"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
