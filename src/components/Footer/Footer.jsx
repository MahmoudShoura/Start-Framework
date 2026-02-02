import { Link } from "react-router";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-main-color pt-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-4">
              <div className="text-center">
                <h3 className="text-white">LOCATION</h3>
                <p className="text-white pb-2">2215 John Daniel Drive</p>
                <p className="text-white">Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <h3 className="text-white">AROUND THE WEB</h3>
                <div className="social-links d-flex justify-content-center align-content-center pt-1">
                  <Link to="#">
                    <div>
                      <i className="bi bi-facebook"></i>
                    </div>
                  </Link>
                  <Link to="#">
                    <div>
                      <i className="bi bi-twitter"></i>
                    </div>
                  </Link>
                  <Link to="#">
                    <div>
                      <i className="bi bi-linkedin"></i>
                    </div>
                  </Link>
                  <Link to="#">
                    <div>
                      <i className="bi bi-dribbble"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center text-white">
                <h3 className="pb-2">ABOUT FREELANCER</h3>
                <p className="">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right text-center py-4 mt-5">
          <p className="m-0 text-white">Copyright © Your Website 2026 | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
