import React from 'react';
import '../App.css';

function Jumbotron() {

  return (
    <div>
        <div className="jumbotron jumbotron-fluid transparency">
            <div className="container">
                <p className="text-center display-1 greeting greeting-yellow top"> Hello! </p>
                <p className="text-center display-4 greeting greeting-blue bottom">My name is Saad. I am a JavaScript developer living
                    in Saint Louis, MO.</p>
            </div>
        </div>
    </div>
  );
}

export default Jumbotron;
