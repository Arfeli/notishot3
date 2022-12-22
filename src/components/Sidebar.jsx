import React from "react";
import Cookies from "universal-cookie";

const Sidebar = () => {
  const cookies = new Cookies();
  console.log(cookies);
  return (
    <>
      {cookies.get("role_key") ? (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
            <a className="sidebar-brand brand-logo" href="index.html">
            </a>
            <a className="sidebar-brand brand-logo-mini" href="index.html">
              <img src="assets/images/logo2.png" alt="logo" />
            </a>
          </div>
          <ul className="nav">
            <li className="nav-item profile">
              <div className="profile-desc">
                <div className="profile-pic">
                  <div className="count-indicator">
                    <img
                      className="img-xs rounded-circle "
                      src="assets/images/faces/face15.jpg"
                      alt=""
                    />
                    <span className="count bg-success"></span>
                  </div>
                  <div className="profile-name">
                    <h5 className="mb-0 font-weight-normal">
                      {cookies.get("nick_name")}
                    </h5>
                    <span>Administrador</span>
                  </div>
                </div>
                <a href="#" id="profile-dropdown" data-toggle="dropdown">
                  <i className="mdi mdi-dots-vertical"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
                  aria-labelledby="profile-dropdown"
                >
                  <a href="#" className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-settings text-primary"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small">
                        Account settings
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-onepassword  text-info"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small">
                        Change Password
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-calendar-today text-success"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small">
                        To-do list
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item nav-category">
              <span className="nav-link">Proyecto</span>
            </li>
            <li className="nav-item menu-items">
              <a className="nav-link" href="index.html">
                <span className="menu-icon">
                  <i className="mdi mdi-speedometer"></i>
                </span>
                <span className="menu-title">Configuraciones</span>
              </a>
            </li>
            <li className="nav-item menu-items">
              <a className="nav-link" href="./users">
                <span className="menu-icon">
                  <i className="mdi mdi-laptop"></i>
                </span>
                <span className="menu-title">Usuarios</span>
                
              </a>
            </li>
            <li className="nav-item menu-items">
              <a className="nav-link" href="./admin">
                <span className="menu-icon">
                  <i className="mdi mdi-playlist-play"></i>
                </span>
                <span className="menu-title">Panel Administrador</span>
              </a>
            </li>
            <li className="nav-item menu-items">
              <a className="nav-link" href="./">
                <span className="menu-icon">
                  <i className="mdi mdi-table-large"></i>
                </span>
                <span className="menu-title">Todas las Noticias</span>
              </a>
            </li> 
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;
