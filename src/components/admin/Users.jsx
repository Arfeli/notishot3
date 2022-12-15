import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

const Users = () => {
    const cookies = new Cookies();
    const history = useNavigate();
    if (cookies.get("token") !== "1") {
        const mandarPortal = () => {
            history.push("/");
        };
    }
    const API = "https://notishot2-production.up.railway.app/api/v1/admin/usuarios";
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
                        created_at: item.created_at,
                        id: item.id,
                    };
                });
                console.log(usuariosMapeadosParaLista);
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
    const [items, setItems] = React.useState()
    //const enviarRegistrar = (e) => {
    //    history.push('/gestion/' + e.target.id);
    //};
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
                                                <th>
                                                    <div className="form-check form-check-muted m-0">
                                                        <label className="form-check-label">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                            />
                                                        </label>
                                                    </div>
                                                </th>
                                                <th> Nick </th>
                                                <th> Numero </th>
                                                <th> Creacion </th>
                                                <th> Cantidad Noticias </th>
                                                <th> Estado</th>
                                                <th> Rol</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user) => {
                                                return (
                                                    <>
                                                        <tr key={user.nick_name}>
                                                            <td>
                                                                <div className="form-check form-check-muted m-0">
                                                                    <label className="form-check-label">
                                                                        <input
                                                                            type="checkbox"
                                                                            className="form-check-input"
                                                                        />
                                                                    </label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <img
                                                                    src="assets/images/faces/face1.jpg"
                                                                    alt="image"
                                                                />
                                                                <span className="pl-2">Henry Klein</span>
                                                            </td>
                                                            <td> 02312 </td>
                                                            <td> $14,500 </td>
                                                            <td> Dashboard </td>
                                                            <td> Credit card </td>
                                                            <td> 04 Dec 2019 </td>
                                                            <td>
                                                                <div className="badge badge-outline-success">
                                                                    Approved
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
    )
}

export default TraerUsers;