import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Contact.css"

export default function Contact()  {

  let [name,setName] = useState("");
  let [age,setAge] = useState("");
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");

  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="row justify-content-center pt-4">
            <h1 className=" fw-bold fs-1 text-uppercase text-center main-color">
              conatct section
            </h1>
            <div className="my-3 star-icon-black text-center ">
              <i className="fa-solid fa-star main-color"></i>
            </div>
        
            <div className="col-md-7 mt-5">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="UserName"
                    required
                  />
                  <label className={`floating-label ${name ? "active" : ""}`}>
                    UserName :
                  </label>
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    className="form-control border-0 border-bottom"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="UserAge"
                    required
                  />
                  <label className={`floating-label ${age ? "active" : ""}`}>
                    UserAge :
                  </label>
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control border-0 border-bottom"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="UserEmail"
                    required
                  />
                  <label className={`floating-label ${email ? "active" : ""}`}>
                    UserEmail :
                  </label>
                </div>
                
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control border-0 border-bottom"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="UserPassword"
                    required
                  />
                  <label className={`floating-label ${password ? "active" : ""}`}>
                    UserPassword :
                  </label>
                </div>

                <div className="text-center d-flex p-4 ">
                  <button type="submit" className="btn btn-primary ">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
          
        
      </section>
      <Footer />
    </>
  );
}
