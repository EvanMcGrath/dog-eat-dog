import React from "react";
import './Main.scss';
import { useState, useEffect } from "react";
import axios from "axios";
import { randomNum } from '../../utils/FunctionDefinitions.js'


const Main = () => {

  const [dogList, setDogList] = useState(null);

  // const [ firstDog, setFirstDog ] = useState(null);
  // const [ secondDog, setSecondDog ] = useState(null);
 
  
  const [random1, random2] = randomNum()

  useEffect(() => {

    axios.get('http://localhost:8080/dogs')
      .then(res => {
        setDogList(res.data)
      })
      .catch(error => console.log(error))      

  }, [])

  // useEffect(() => {

  //   if (!dogList) return

  //   setFirstDog(dogList[random1]);
  //   setSecondDog(dogList[random2]);

  // }, [dogList])

  
  if (!dogList) {
    return <h1>Loading...</h1>
  }

  // if (!firstDog) {
  //   return <h1>Loading...</h1>
  // }


  // const firstDogWins = () => {

  //   axios.post('http://localhost:8080/dogs/', {

  //   })
  //     .then((res) => {

  //     })

  // }

  return (
    <main className="Main">
      <div className="card">
        <div className="card__image-wrapper">
          <img src={dogList[random1].image} className="card__dog-image" />
        </div>
        <h3>{dogList[random1].name}</h3>
        <button className="card__button"></button>
      </div>

      <h2 className="versus">VS</h2>

      <div className="card">
        <div className="card__image-wrapper">
          <img src={dogList[random2].image} className="card__dog-image" />
        </div>
        <h3>{dogList[random2].name}</h3>
        <button className="card__button"></button>
      </div>
    </main>
  )
};

export default Main;
