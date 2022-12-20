import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const Register = () => {
  const cookies = new Cookies();
  const API = "https://notishot2-production.up.railway.app/api/v1/public/store";
  const [state, setState] = React.useState({
    form: {
      nick_name: "",
      email: "",
      password: "",
      c_password: "",
      role_id: "",
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
  const newUser = async () => {
    await axios
      .post(API, {
        nick_name: state.form.nick_name,
        email: state.form.email,
        password: state.form.password,
        c_password: state.form.c_password,
        role_id: "4",
      })
      .then((response) => {
        console.log(response);
        alert("Usuario creado Correctamente");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
        alert("se subio como el tuje");
      });
  };
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="row w-100 m-0">
          <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div className="card col-lg-4 mx-auto">
              <div className="card-body px-5 py-5">
                <h3 className="card-title text-left mb-3">Crear Usuario</h3>
                <div className="form-group">
                  <label>Email*</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control p_input"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Usuario</label>
                  <input
                    type="text"
                    name="nick_name"
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
                <div className="form-group">
                  <label>Password *</label>
                  <input
                    type="password"
                    name="c_password"
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
                    onClick={newUser}
                  >
                    Registrar
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
  );
};

export default Register;
