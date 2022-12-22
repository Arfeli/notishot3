import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

const Users = () => {
  const cookies = new Cookies();
  const history = useNavigate();
  if (cookies.get("token") !== "1") {
    const mandarPortal = () => {
      window.location.href = "/";;
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
  const [users] = Users();
  const [items, setItems] = React.useState();
  const saveObject = () => {
    const vemos = {users}
    console.log(vemos)
  }
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
                                <img
                                  src="assets/images/faces/face1.jpg"
                                  alt="image"
                                />
                                <span className="pl-2">{user.nick_name}</span>
                              </td>
                              <td> {user.email}</td>

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
                              )}

                              <td>
                                <button
                                  type="button"
                                  class="btn btn-success btn-rounded btn-icon"
                                  none
                                >
                                  <i class="mdi mdi-check-all"></i>
                                </button>
                              </td>
                              <td> vemos despues </td>
                              <td>
                                <Link to={"../edituser"}>
                                <button
                                  type="button"
                                  class="btn btn-outline-secondary btn-icon-text"
                                  value={user.id}
                                  onClick={saveObject}
                                >
                                  Editar
                                  <i class="mdi mdi-file-check btn-icon-append"></i>
                                </button>
                                </Link>
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
