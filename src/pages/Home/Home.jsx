import Navbar from "../../components/Navbar/Navbar";
import avatar from "../../assets/images/avataaars.svg";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-primary-color">
        <div className="container">
          <div className="row justify-content-center text-center min-vh-100 align-items-center">
            <div className="col-md-10">
              <div className="home-content">
                <div className="w-25 m-auto">
                  <img className="w-100" src={avatar} alt="" />
                </div>
              <h1 className="pt-4 text-uppercase fw-bolder fs-1 text-white">start Framework</h1>
              <div className="my-3 star-icon">
                <i className="fa-solid fa-star text-white"></i>
              </div>
            <p className="text-white">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
