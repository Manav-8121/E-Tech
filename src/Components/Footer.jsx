import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl text-white font-semibold">Tech-Electronics</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-400">
              Functions of Electronic Devices: Electronic devices perform three
              main functions: (1) amplification, (2) switching, and (3)
              oscillation, all as part of circuits. ...
            </h5>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                      href="#!"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                      href="#!"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                      href="#!"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-400 font-semibold py-1">
              Made with <i className="fa fa-heart text-red-500"></i> by{" "}
              <a
                href="https://www.yourwebsite.com"
                className="text-white hover:text-gray-400"
              >
                Your Company Name
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
