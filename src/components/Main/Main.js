import React from "react";
import './Main.scss';
import { useState, useEffect } from "react";
import axios from "axios";
import { randomNum } from '../../utils/FunctionDefinitions.js'


const Main = () => {

  // const [dogList, setDogList] = useState(null);

  // const [random1, random2] = randomNum()

  // useEffect(() => {

  //   axios.get('http://localhost:8080/dogs')
  //   .then(res => {
  //     setDogList(res.data)
  //   })
  //   .catch(error => console.log(error))      

  // }, [])

  // if (!dogList) {
  //     return <h1>Loading...</h1>
  //   }


  const [firstDog, setFirstDog] = useState(null);
  const [secondDog, setSecondDog] = useState(null);

  const [random1, random2] = randomNum()

  useEffect(() => {

    axios.get('http://localhost:8080/dogs')
      .then(res => {
        setFirstDog(res.data[random1])
        setSecondDog(res.data[random2])
      })
      .catch(error => console.log(error))

  }, [])




  if (!firstDog || !secondDog) {
    return <h1>Loading...</h1>
  }


  const firstDogWins = () => {

    axios.put('http://localhost:8080/winner', {

      winningId: firstDog.id,
      losingId: secondDog.id

    })
      .then((res) => {
        console.log(res.data)
        setSecondDog(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  const secondDogWins = () => {

    axios.put('http://localhost:8080/winner', {

      winningId: secondDog.id,
      losingId: firstDog.id

    })
      .then((res) => {
        console.log(res.data)
        setFirstDog(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }


  return (
    <main className="Main">
      <div className="card">
        <div className="card__image-wrapper">
          <img src={firstDog.image} className="card__dog-image" />
        </div>
        <h3>{firstDog.name}</h3>
        <button className="card__button" onClick={()=> firstDogWins()}>&#60;3</button>
      </div>

      <h2 className="versus">VS</h2>

      <div className="card">
        <div className="card__image-wrapper">
          <img src={secondDog.image} className="card__dog-image" />
        </div>
        <h3>{secondDog.name}</h3>
        <button className="card__button" onClick={() => secondDogWins()}>&#60;3</button>
      </div>
    </main>
  )
};

export default Main;
