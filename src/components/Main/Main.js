import React from "react";
import './Main.scss';
import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {

    const [dogList, setDogList] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080')
          .then(res => {
            setDogList(res.data)
            console.log(res.data)
          }).catch(error => console.log(error))
    },[])


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
