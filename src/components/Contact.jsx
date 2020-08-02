import React from 'react';


function Contact() {
  return (
    <div className="row sections">
      <div className="col-sm-12 text-center display-4">
        <p id="email" className="custom-hdr">
          Get In Touch
        </p>
        <div className="row sections">
          <div className="col-sm-12">
            <a
              className="btn-custom-styling"
              href="mailto:saadsharieff@gmail.com"
            >
              Email Me
            </a>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
