import Footer from "../../components/Footer/Footer";
import img1 from "../../assets/images/port1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";
import Navbar from "../../components/Navbar/Navbar";
import "./Portfolio.css";

export default function Portfolio() {
  const images = [
    { path: img1, id: "port1" },
    { path: img2, id: "port2" },
    { path: img3, id: "port3" },
    { path: img1, id: "port1" },
    { path: img2, id: "port2" },
    { path: img3, id: "port3" },
  ];
  return (
    <>
      <Navbar />
      <section className="h-auto py-5">
        <div className="container">
          <div className="row g-5">
            <h1 className=" fw-bold fs-1 text-uppercase text-center main-color">
              portfolio component
            </h1>
            <div className="my-1 star-icon-black text-center">
              <i className="fa-solid fa-star main-color"></i>
            </div>
            {images.map((img) => (
              <>
                <div className="col-md-4">
                  <div className="image-card">
                    <img src={img.path} className="img-fluid" alt="" />
                    <div
                      data-bs-toggle="modal"
                      data-bs-target={"#" + img.id}
                      className="layer"
                    >
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div
                  class="modal fade"
                  id={img.id}
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-body">
                        <img src={img.path} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
