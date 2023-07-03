import React from 'react';
import './cards.css';

function Cards() {
  return (
   <div className="container">
   <div className="row">
     
      <div className="card card-circle">
         <div className="card-icon">
            <i className="fas fa-apple-alt"></i>
         </div>
         <div className="card-body">
            <h5 className="card-title">Apple</h5>
            <p className="card-text">Some quick example text to build on the card title and card content.</p>
            <a href="#" className="btn btn-primary">Eat me</a>
         </div>
      </div>
    
      <div className="card card-circle">
         <div className="card-icon">
            <i className="fas fa-cookie"></i>
         </div>
         <div className="card-body">
            <h5 className="card-title">Cookie</h5>
            <p className="card-text">Some quick example text to build on the card title and card content.</p>
            <a href="#" className="btn btn-primary">Eat me</a>
         </div>
      </div>
 
      <div className="card card-circle ">
         <div className="card-icon">
            <i className="fas fa-carrot"></i>
         </div>
         <div className="card-body">
            <h5 className="card-title">Carrot</h5>
            <p className="card-text">Some quick example text to build on the card title and card content.</p>
            <a href="#" className="btn btn-primary">Eat me</a>
         </div>
      </div>
   </div>
</div>
  );
}

export default Cards;
