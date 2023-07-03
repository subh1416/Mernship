import React from 'react';
import './cards.css';

function Cards() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="custom-card custom-card-circle">
            <div className="custom-card-icon">
              <i className="fas fa-apple-alt"></i>
            </div>
            <div className="custom-card-body">
              <h5 className="custom-card-title">Apple</h5>
              <p className="custom-card-text">Some quick example text to build on the card title and card content.</p>
              <button className="custom-btn custom-btn-primary">Eat me</button>
            </div>
          </div>

          <div className="custom-card custom-card-circle">
            <div className="custom-card-icon">
              <i className="fas fa-cookie"></i>
            </div>
            <div className="custom-card-body">
              <h5 className="custom-card-title">Cookie</h5>
              <p className="custom-card-text">Some quick example text to build on the card title and card content.</p>
              <button className="custom-btn custom-btn-primary">Eat me</button>
            </div>
          </div>

          <div className="custom-card custom-card-circle">
            <div className="custom-card-icon">
              <i className="fas fa-carrot"></i>
            </div>
            <div className="custom-card-body">
              <h5 className="custom-card-title">Carrot</h5>
              <p className="custom-card-text">Some quick example text to build on the card title and card content.</p>
              <button className="custom-btn custom-btn-primary">Eat me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
