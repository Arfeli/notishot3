import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";


const Login = () => {
  console.log("a ver")
  
  const cookies = new Cookies();
  const history = useNavigate;
  const API = "https://notishot2-production.up.railway.app/api/v1/login";
  const [state, setState] = React.useState({
    form: {
      username: "",
      password: "",
    },
  });
  const handleChange = async (e) => {
    await setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  //const enviarRegistrar = () => {
  //  history.push("/register");
  //};
  const enviarPortal = () => {
    history.push("/");
  };
  const iniciarSesion = async () => {
    await axios
      .post(API, {
        email: state.form.username,
        password: state.form.password,
      })
      .then((response) => {
        console.log(response);
        cookies.set("id", response.data.data.role.id, { path: "/" });
        cookies.set("nick_name", response.data.data.nick_name, { path: "/" });
        cookies.set("role_key", response.data.data.role.role_key, {
          path: "/",
        });
        cookies.set("token", response.data.data.token, { path: "/" });

        window.location.href = "/s";
      })
      .catch((error) => {
        console.log(error);
        alert("Contraseña o Usuario incorrecto");
      });
  };
  return (
    <body>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="row w-100 m-0">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
              <div className="card col-lg-4 mx-auto">
                <div className="card-body px-5 py-5">
                  <h3 className="card-title text-left mb-3">Iniciar Sesion</h3>
                  <div className="form-group">
                    <label>Email*</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control p_input"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password *</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control p_input"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" />{" "}
                        Recuerdame{" "}
                      </label>
                    </div>
                    <a href="#" className="forgot-pass">
                      Olvidaste tu contraseña?
                    </a>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block enter-btn"
                      onClick={iniciarSesion}
                    >
                      Iniciar Sesion
                    </button>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-facebook mr-2 col">
                      <i className="mdi mdi-facebook"></i> Facebook{" "}
                    </button>
                    <button className="btn btn-google col">
                      <i className="mdi mdi-google-plus"></i> Google plus{" "}
                    </button>
                  </div>
                  <p className="sign-up">
                    ¿Aun no tienes cuenta?<a href="#"> Registrate</a>
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
