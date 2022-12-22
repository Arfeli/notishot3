import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

function GetNotices() {
  const cookies = new Cookies();
  const API =
    "https://notishot2-production.up.railway.app/api/v1/public/notas-portada";
  const [notas, setNotas] = useState([]);
  async function notasTraidas() {
    const notas = await axios
      .get(API, {
        headers: {
          Authorization: "Bearer " + cookies.get("token"),
        },
      })
      .then((response) => {
        const noticiasMapeadasParaLista = response.data.data.map((item) => {
          return {
            id: item.id,
            title: item.title,
            body: item.body,
            location: item.location,
            user: item.user,
            photo: item.location,
          };
        });
        console.log("este no se repite");
        return noticiasMapeadasParaLista;
      })
      .catch((error) => {
        console.log(error);
      });
    setNotas(notas);
    console.log("se repite?");
  }
  useEffect(() => {
    notasTraidas();
  }, []);
  return [notas];
}
const Notices = () => {
  const [notas] = GetNotices();
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-xs-4 col-sm-6 col-ls-6 col-xl-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="item">
                  <iframe
                  style={{ width: "250px", height: "250px" }}
                    
                    src="https://www.youtube.com/embed/hqKGDK4W_p0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="d-flex py-4">
                  <div className="preview-list w-100">
                    <div className="preview-item p-0">
                      <div className="preview-item-content d-flex flex-grow">
                        <div className="flex-grow">
                          <div className="d-flex d-md-block d-xl-flex justify-content-between">
                            <h6 className="preview-subject"></h6>
                          </div>
                          <p className="text-muted"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted">Well, it seems to be working now. </p>
              </div>
            </div>
          </div>
          {notas.map((nota) => {
            return (
              <div className="col-xs-4 col-sm-6 col-ls-6 col-xl-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="item">
                      <img
                        src={nota.photo}
                        alt=""
                        style={{ width: "250px", height: "250px" }}
                      />
                    </div>
                    <div className="d-flex py-4">
                      <div className="preview-list w-100">
                        <div className="preview-item p-0">
                          <div className="preview-item-content d-flex flex-grow">
                            <div className="flex-grow">
                              <div className="d-flex d-md-block d-xl-flex justify-content-between">
                                <h6 className="preview-subject">
                                  {nota.title}
                                </h6>
                              </div>
                              <p className="text-muted">{nota.body}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted">
                      Well, it seems to be working now.{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notices;
