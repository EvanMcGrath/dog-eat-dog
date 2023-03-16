import React from "react";
import './Main.scss';

const Main = () => {
  return (
    <main className="Main">
      <div className="card">
        <div className="card__image-wrapper">
          <img src="#" className="card__dog-image"/>
      </div>
       <button className="card__button"></button>
       </div>

      <h2 className="versus">VS</h2>

      <div className="card">
        <div className="card__image-wrapper">
          <img src="#" className="card__dog-image"/>
      </div>
       <button className="card__button"></button>
       </div>
   </main>
  );
};

export default Main;
