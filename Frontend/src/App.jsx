import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">React and Bootstrap Example</h1>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <button className="btn btn-success btn-lg">Click Me</button>
        </div>
        <div className="col-md-4">
          <div className="alert alert-warning" role="alert">
            This is a warning alert!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
