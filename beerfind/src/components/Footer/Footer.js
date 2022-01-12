import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="page-footer font-small"
      style={{ backgroundColor: "black" }}
    >
      <div className="container text-center text-md-left mt-4">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold text-light mt-4">
              Punk Api Project
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p className="text-warning">Upschool React Homework</p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold mt-4 text-light">
              Tech Tools
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <Link className="text-warning" to="#">
                React
              </Link>
            </p>
            <p>
              <Link className="text-warning" to="#">
                Bootstrap
              </Link>
            </p>
            <p>
              <Link className="text-warning" to="#">
                React-router-dom
              </Link>
            </p>
            <p>
              <Link className="text-warning" to="#">
                Axios
              </Link>
            </p>
            <p>
              <Link className="text-warning" to="#">
                rc-slider
              </Link>
            </p>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold mt-4 text-light">
              Team Members
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <Link className="text-warning" to="#">
                Gizem Yakabağ
              </Link>
            </p>
            <p>
              <Link className="text-warning" to="#">
                Kübra Öztürk
              </Link>
            </p>
            <p>
              <Link className="text-warning" to="#">
                Ayça Akçay
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
