import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

const Users = () => {
  const cookies = new Cookies();
  const history = useNavigate();
  if (cookies.get("token") !== "1") {
    const mandarPortal = () => {
      window.location.href = "/";
    };
  }
  const API =
    "https://notishot2-production.up.railway.app/api/v1/admin/usuarios";
  const [users, setUsers] = useState([]);
  async function usuariosTraidos() {
    const users = await axios
      .get(API, {
        headers: {
          Authorization: "Bearer " + cookies.get("token"),
        },
      })
      .then((response) => {
        const usuariosMapeadosParaLista = response.data.data.map((item) => {
          return {
            nick_name: item.nick_name,
            email: item.email,
            role: item.role,
            role_id: item.role_id,
            created_at: item.created_at,
            id: item.id,
          };
        });
        return usuariosMapeadosParaLista;
      })
      .catch((error) => {
        console.log(error);
      });
    setUsers(users);
  }

  useEffect(() => {
    usuariosTraidos();
  }, []);
  return [users];
};

const TraerUsers = () => {
  //const history = useNavigate();
  const cookies = new Cookies();
  const [edit, setEdit] = React.useState({
    form: {
      role_id: "",
      id: "",
    },
  });
  const handleChange = (e) => {
    setEdit({
      form: {
        ...edit.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  console.log(edit);

  async function editarUsuario() {
    await axios
      .put(
        `https://notishot2-production.up.railway.app/api/v1/admin/usuarios/${edit.form.id}`,
        {
          role_id: edit.form.role_id,
        },
        {
          headers: {
            Authorization: "Bearer " + cookies.get("token"),
          },
        }
      )

      .then((response) => {
        console.log(response);
        alert("se cambio el rol del usuario");
        window.location.href = "/users";
      })
      .catch((error) => {
        console.log(error);
        console.log("estamos viendo el put");
        alert("se subio como el tuje");
      });
  }
  const [users] = Users();
  const [items, setItems] = React.useState();

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row ">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Usuarios</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> Nick </th>
                        <th> email</th>
                        <th>id</th>
                        <th> Rol </th>
                        <th> Estado</th>
                        <th> Estado</th>
                        <th> editar</th>
                        <th> Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => {
                        return (
                          <>
                            <tr key={user.nick_name}>
                              <td>
                                <span className="pl-2">{user.nick_name}</span>
                              </td>
                              <td> {user.email}</td>
                              <td>{user.id}</td>
                              <td>
                              {user.role_id === 2 ? (
                                <p>
                                  <br />
                                  <button
                                    type="button"
                                    class="btn btn-inverse-danger btn-fw"
                                  >
                                    Administrador
                                  </button>
                                </p>
                              ) : user.role_id === 3 ? (
                                <>
                                  <input
                                    type="text"
                                    style={{width: "45px"}}
                                    name="role_id"
                                    placeholder="ROL"
                                    onChange={handleChange}
                                  ></input>
                                  <input
                                    type="text"
                                    style={{width: "45px", margin: "25px"}}
                                    name="id"
                                    placeholder="ID"
                                    onChange={handleChange}
                                  ></input>
                                </>
                              ) : user.role_id === 4 ? (
                                <>
                                  <input
                                    type="text"
                                    style={{width: "45px"}}
                                    name="role_id"
                                    placeholder="ROL"
                                    onChange={handleChange}
                                  ></input>
                                  <input
                                    type="text"
                                    style={{width: "45px", margin: "25px"}}
                                    name="id"
                                    placeholder="ID"
                                    onChange={handleChange}
                                  ></input>
                                </>
                              ) : (
                                <>
                                  <input
                                    type="text"
                                    style={{width: "45px"}}
                                    name="role_id"
                                    placeholder="ROL"
                                    onChange={handleChange}
                                  ></input>
                                  <input
                                    type="text"
                                    style={{width: "45px", margin: "25px"}}
                                    name="id"
                                    placeholder="ID"
                                    onChange={handleChange}
                                  ></input>
                                </>
                              )}
                              </td>
                              <td>
                                <button 
                                  type="button"
                                  class="btn btn-success btn-rounded btn-icon"
                                  none
                                >
                                  <i class="mdi mdi-check-all"></i>
                                </button>
                              </td>
                              <td> {user.role_id === 2 ? (
                                <p>
                                  <br />
                                  <button
                                    type="button"
                                    class="btn btn-inverse-danger btn-fw"
                                  >
                                    Administrador
                                  </button>
                                </p>
                              ) : user.role_id === 3 ? (
                                <p>
                                  <br />
                                  <button
                                    type="button"
                                    class="btn btn-inverse-warning btn-fw"
                                  >
                                    Moderador
                                  </button>
                                </p>
                              ) : user.role_id === 4 ? (
                                <p>
                                  <br />
                                  <button
                                    type="button"
                                    class="btn btn-inverse-primary btn-fw"
                                  >
                                    Lector
                                  </button>
                                </p>
                              ) : (
                                <p>
                                  <br />
                                  <button
                                    type="button"
                                    class="btn btn-inverse-success btn-fw"
                                  >
                                    Rector
                                  </button>
                                </p>
                              )}</td>
                              <td>
                                <button
                                  type="button"
                                  class="btn btn-outline-secondary btn-icon-text"
                                  value={user.id}
                                  onClick={editarUsuario}
                                >
                                  Editar
                                  <i class="mdi mdi-file-check btn-icon-append"></i>
                                </button>
                              </td>
                              <td>
                                <div className="badge badge-outline-success">
                                  Aprobado
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraerUsers;
