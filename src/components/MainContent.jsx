import React from 'react';
import '../App.css';

function MainContent() {

  return (
    <div>
  <div className="container">
    <div className="row sections">
      <div className="col-sm-12 display-4">
        <p id="about" className="custom-hdr">About</p>
      </div>
      <div className="col-sm-12 text-dark text-break">
        <p>I am currently working as an IT Support Analyst at Unigroup, which is where my passion for creating new
          solutions and keeping customers happy converge. See <a className="inner-link"
            href="https://www.linkedin.com/in/saad-sharieff-dev" target="_blank" rel="noopener noreferrer"><mark>my previous work history</mark></a>, or you can
          download my <a className="inner-link" href="data/test.pdf"
            download="saadSharieffResume" target="_blank" rel="noopener noreferrer"><mark>resume.</mark></a></p>
        <p>Outside of work, I live and relax in the Central West End of St. Louis, play soccer, and try out new
          restaurants around the city. I am also a part time volunteer for Code for America, and lead a group of
          like-minded junior developers who want to grow their technical skills. I am currently working on a few
          projects that you can follow on my <a className="inner-link"
            href="https://github.com/SAS0588" target="_blank" rel="noopener noreferrer"><mark>GitHub.</mark></a> Currently, I am not accepting freelance work,
          but I'd love to get to know you over coffee, so feel free to reach out to me.</p>
      </div>
    </div>
    <hr />
    <div className="row sections">
      <div className="col-sm-12 text-center display-4">
        <p id="email" className="custom-hdr">Get In Touch</p>
        <div className="row sections">
          <div className="col-sm-12">
            <a className="btn-custom-styling" href="mailto:saadsharieff@gmail.com">Email Me</a>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default MainContent;
