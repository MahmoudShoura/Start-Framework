export default function NotFound() {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5 text-center">
                {/* 404 Icon/Number */}
                <div className="mb-4">
                  <h1 className="display-1 fw-bold text-danger mb-0" >404</h1>
                  <p className="text-muted fs-5 mt-2">Oops! Page Not Found</p>
                </div>

                {/* Error Message */}
                <div className="mb-5">
                  <p className="text-muted fs-6 mb-2">
                    The page you're looking for doesn't exist or has been moved.
                  </p>
                  <p className="text-muted fs-6">
                    Please check the URL and try again.
                  </p>
                </div>

                {/* Illustration */}
                <div className="mb-5">
                  <svg
                    className="mx-auto d-block"
                    style={{ width: "150px", height: "150px", opacity: 0.6 }}
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      stroke="#ddd"
                      strokeWidth="2"
                    />
                    <path
                      d="M70 80 Q70 60 90 60 Q110 60 110 80"
                      stroke="#ddd"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx="80" cy="75" r="3" fill="#ddd" />
                    <circle cx="100" cy="75" r="3" fill="#ddd" />
                    <path
                      d="M75 110 Q100 130 125 110"
                      stroke="#ddd"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Action Buttons */}
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <a href="/" className="btn btn-danger btn-lg px-4">
                    Go Home
                  </a>
                  <a
                    href="javascript:history.back()"
                    className="btn btn-outline-danger btn-lg px-4"
                  >
                    Go Back
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
