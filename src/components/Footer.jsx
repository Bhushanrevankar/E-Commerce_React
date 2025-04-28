import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Made with ❤️ by{" "}
              <a 
                className="text-dark fs-4" 
                href="https://github.com/Bhushanrevankar" 
                target="_blank" 
                rel="noreferrer"
              >
               
                {" "} <span className="fs-6">Bhushan Revankar</span>{""}
                <span className="fs-6 ms-2"><i className="fa fa-github"></i></span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
