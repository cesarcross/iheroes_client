import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  Arena,
  Threats,
  Threat,
  IdentifyThreat,
  Heroes,
  Hero,
  Title,
  BattleButton,
  ChosenHero,
  CreateHero,
} from "./Battle.style";
import { match } from "./Match";

const Battle = () => {
  const [pickHero, setPickHero] = useState("");
  const [heroes, setHeroes] = useState([]);

  const random = (el) => el[Math.floor(Math.random() * el.length)];
  const heroesRanks = ["S", "A", "B", "C"];
  const sortedRank = random(heroesRanks);

  // fetch heroes
  useEffect(() => {
    const fetchHeroes = async () => {
      const fetchedHeroes = await fetch(
        "https://iheroes-api.vercel.app/heroes"
      ).then((response) => response.json());
      setHeroes(fetchedHeroes);
    };

    fetchHeroes();
  }, []);

  // ===================================================================================

  const [allThreats, setAllThreats] = useState([]);
  const [threat, setThreat] = useState("");

  // fetch threats
  useEffect(() => {
    const fetchThreats = async () => {
      const response = await fetch("https://iheroes-api.vercel.app/threats");
      response.json().then((response) => setAllThreats(response));
    };

    fetchThreats();
  }, []);

  // fetch threats and pick one from the threat rooster
  const generateThreat = () => {
    const sortedThreat = random(allThreats);
    setThreat(sortedThreat);
  };

  // ===================================================================================

  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // ===================================================================================

  const createHero = async (e) => {
    e.preventDefault();

    const newHero = {
      id: uuidv4(),
      picture:
        "https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.rimonthly.com/content/uploads/2020/04/92763513_10157211019793177_4234015456597377024_o.png",
      name: userInput.charAt(0).toUpperCase() + userInput.slice(1),
      rank: sortedRank,
    };

    await fetch("https://iheroes-api.vercel.app/heroes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHero),
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    setHeroes([...heroes, newHero]);
  };

  // ===================================================================================

  const deleteHero = async (e) => {
    e.preventDefault();

    if (
      pickHero.name === "Storm" ||
      pickHero.name === "Thor" ||
      pickHero.name === "Spiderman" ||
      pickHero.name === "Thor" ||
      pickHero.name === "Rogue" ||
      pickHero.name === "Ironman" ||
      pickHero.name === "Batman" ||
      pickHero.name === "Catwoman" ||
      pickHero.name === "Chapolin"
    ) {
      const updatedHeroes = heroes.filter((hero) =>
        hero.name !== pickHero.name ? hero : ""
      );

      setHeroes(updatedHeroes);
    } else {
      await fetch(`https://iheroes-api.vercel.app/heroes/${pickHero.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      const updatedHeroes = heroes.filter((hero) =>
        hero.id !== pickHero.id ? hero : ""
      );

      setHeroes(updatedHeroes);
    }

    setTimeout(() => {
      setPickHero("");
    }, 0);
  };

  // ===================================================================================

  return (
    <>
      <Title>
        In the future, Earth satelites are detecting unknown threats coming from
        cosmic portals. It is your mission to identify the iminent danger and
        recruit the right Hero to save the day!
      </Title>
      <Arena>
        <Threats>
          <IdentifyThreat onClick={generateThreat}>
            Identify Threat
          </IdentifyThreat>
          <Threat>
            {threat ? (
              <>
                <img src={threat.imageUrl} alt="threat avatar" />
                <h3>{threat.name}</h3>
                <p>Danger: {threat.dangerLevel}</p>
              </>
            ) : (
              ""
            )}
          </Threat>
        </Threats>
        <div>
          <Heroes>
            <h3 className="chooseHero">Choose your Hero</h3>
            {heroes.map((hero) => (
              <Hero key={hero.id} onClick={() => setPickHero(hero)}>
                <img src={hero.picture} alt="hero avatar" />
                <p>{hero.name} </p> <h3>{hero.rank} </h3>
                {pickHero.id === hero.id ? (
                  <button onClick={deleteHero}>X</button>
                ) : (
                  ""
                )}
              </Hero>
            ))}
          </Heroes>
          <CreateHero>
            <form onSubmit={createHero}>
              <input
                type="text"
                placeholder="Hero name"
                onChange={handleChange}
              />
              <input type="submit" value="Create Hero" />
            </form>
          </CreateHero>
          <ChosenHero>
            {pickHero ? (
              <div className="chosen">
                <p>Chosen hero: {pickHero.name}</p>
              </div>
            ) : (
              ""
            )}
          </ChosenHero>
        </div>
      </Arena>
      {threat && pickHero ? (
        <BattleButton onClick={() => match(threat.dangerLevel, pickHero)}>
          Battle!
        </BattleButton>
      ) : (
        ""
      )}
    </>
  );
};

export default Battle;
