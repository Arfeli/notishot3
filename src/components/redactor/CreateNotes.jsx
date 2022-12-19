import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const CreateNotes = () => {
  const cookies = new Cookies();
  console.log("a ver")
  //const history = useNavigate;
  const API = "https://notishot2-production.up.railway.app/api/v1/writer/notes";
  const [state, setState] = React.useState({
    form: {
      title: "",
      body: "",
      url: "",
    },
  });

  const handleChange = (e) => {
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  const createNotice = async () => {
    await axios
      .post(
        API,
        {
          category_id: "1",
          title: state.form.title,
          body: state.form.body,
          location: state.form.url,
          resource: "vemos",
        },
        { headers: { Authorization: "Bearer " + cookies.get("token") } }
      )
      .then((response) => {
        console.log(response);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
        alert("se subio como el tuje");
      });
      
  };
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header"></div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Crea tu suceso ahora!</h4>
                <p className="card-description"> </p>

                <div className="form-group">
                  <label for="exampleInputUsername1">Titulo</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="titulo"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Datos</label>
                  <input
                    type="textarea"
                    className="form-control"
                    placeholder="datos"
                    name="body"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">URL</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="url"
                    name="url"
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mr-2"
                  onClick={createNotice}
                >
                  Disparar
                </button>
                <button className="btn btn-dark">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNotes;
