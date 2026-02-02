import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="bg-primary-color">
        <div className="container">
          <div className="row text-center text-white justify-content-center min-vh-100 align-items-center">
            <div className="col-md-10">
              <h1 className="text-white fw-bold text-uppercase">
                about component
              </h1>
              <div className="my-3 star-icon">
                <i className="fa-solid fa-star text-white"></i>
              </div>
              <div className="row text-white">
            <div className="col-md-6 fs-6">
              <p className="text-start">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 fs-6 lh-10">
              <p className="text-start">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
            </div>
          </div>

          
        </div>
      </section>
      <Footer />
    </>
  );
}
