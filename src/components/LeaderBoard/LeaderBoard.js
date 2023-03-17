import React from "react";
import "./LeaderBoard.scss";
import { useState, useEffect } from "react";
import axios from "axios";


const LeaderBoard = () => {
  const [dogList, setDogList] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/leaderboard")
      .then((res) => {
        console.log(res);
        setDogList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (dogList === null) {
    return <span className="loading">Waiting for next battle..</span>;
  }

  return (
    <div className="board">
      <ol className="board__list">
        <div className="top-dog-wrapper">
          <img className="top-dog" src={dogList[0].image} />
        </div>
        <h1 className="board__title">Every dog has its day</h1>
        <div className="board__group-wrapper">
          <div className="board__group">
            <p className="board__finish">1. {dogList[0].name}</p>
            <p className="board__finish">2. {dogList[1].name}</p>
            <p className="board__finish">3. {dogList[2].name}</p>
            <p className="board__finish">4. {dogList[3].name}</p>
            <p className="board__finish">5. {dogList[4].name}</p>
            <p className="board__finish">6. {dogList[5].name}</p>
          </div>
          <div className="board__group">
            <p className="board__finish">7. {dogList[6].name}</p>
            <p className="board__finish">8. {dogList[7].name}</p>
            <p className="board__finish">9. {dogList[8].name}</p>
            <p className="board__finish">10. {dogList[9].name}</p>
            <p className="board__finish">11. {dogList[10].name}</p>
            <p className="board__finish">12. {dogList[11].name}</p>
          </div>
        </div>
      </ol>
    </div>
  );
};

export default LeaderBoard;
