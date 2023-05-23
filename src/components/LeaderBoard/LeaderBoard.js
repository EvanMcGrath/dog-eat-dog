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
    return <span className="loading">Waiting for next battle...</span>;
  }

  return (
    <main className="leaderboard">
      <div className="top-dog">
        <img className="top-dog__image-file" src={dogList[0].image} />
      </div>
      <section className="leaderboard__all-rankings">
        {/* <h1 className="leaderboard__title">Every dog has its day</h1> */}
        {dogList.map((dog, i) => {
          if (i <= 9 ) {
            return (
              <p key={i} className={ i === 0 ? "leaderboard__ranking--topdog" : "leaderboard__ranking" }>
                <span>{i + 1}</span> {dog.name}
              </p>
            );
          } else {
            return;
          }
        })}
      </section>
    </main>
  );
};

export default LeaderBoard;
