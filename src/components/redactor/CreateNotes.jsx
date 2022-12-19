import React from "react";

const CreateNotes = () => {
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header"></div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Crea tu suceso ahora!</h4>
                <p className="card-description">  </p>
                <form className="forms-sample">
                  <div className="form-group">
                    <label for="exampleInputUsername1">Titulo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="titulo"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Datos</label>
                    <input
                      type="textarea"
                      className="form-control"
                      id="body"
                      placeholder="datos"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">URL</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="url"
                    />
                  </div>
                  
                  
                  <button type="submit" className="btn btn-primary mr-2">
                    Disparar
                  </button>
                  <button className="btn btn-dark">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNotes;
