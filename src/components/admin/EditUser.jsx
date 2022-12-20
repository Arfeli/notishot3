import React from 'react'
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

const EditUser = (algo) => {
  const cookies = new Cookies();
  const { id } = useParams();
  console.log(id)
  
  const API =
    "https://notishot2-production.up.railway.app/api/v1/admin/usuarios";
  const [users, setUsers] = React.useState([]);
  async function usuariosTraidos() {
    const users = await axios
      .get(API, {
        headers: {
          Authorization: "Bearer " + cookies.get("token"),
        },
      })
      .then((response) => {
        const usuariosMapeadosParaLista = response.data.data.map((item) => {
        console.log(response)
          return {
            nick_name: item.nick_name,
            email: item.email,
            role: item.role,
            role_id: item.role_id,
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
  React.useEffect(() => {
    usuariosTraidos();
  }, []);
  return [users];
}
  const updateUser = () => {

  return (
    <div class="card-body">
                    <h4 class="card-title">Default form</h4>
                    <p class="card-description"> Basic form layout </p>
                   
                      <div class="form-group">
                        <label for="exampleInputUsername1">Username</label>
                        <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Username" />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputConfirmPassword1">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputConfirmPassword1" placeholder="Password" />
                      </div>
                      <div class="form-check form-check-flat form-check-primary">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" /> Remember me <i class="input-helper" ></i></label>
                      </div>
                      <button type="submit" class="btn btn-primary mr-2">Submit</button>
                      <button class="btn btn-dark">Cancel</button>
                 
                  </div>
  )
}

export default updateUser