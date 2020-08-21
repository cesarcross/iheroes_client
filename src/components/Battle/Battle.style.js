import styled from "styled-components";

export const Arena = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 1400px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin: 10px;
  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 1.7rem;
    text-align: center;
    padding: 15px;
  }

  @media screen and (min-width: 1400px) {
    margin: 20px auto 40px;
    padding: 30px;
  }
`;

// ------------------------

export const Threats = styled.div`
  margin: 10px;
  padding: 10px;

  img {
    width: 180px;
  }
`;

export const Threat = styled.div`
  margin: 20px auto;
  color: #fddb3a;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  width: 300px;

  h3,
  p {
    margin: 5px;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 15px;
  }

  p {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1400px) {
    width: 550px;

    h3 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
    }

    img {
      width: 500px;
    }
  }
`;

export const IdentifyThreat = styled.button`
  margin: 0 auto;
  display: block;
  background: #883154;
  color: #fddb3a;
  border: 2px;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  font-size: 1.8rem;
  font-weight: bold;
`;

// ------------------------

export const Heroes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  color: #ffffff;

  .chooseHero {
    font-size: 1.8rem;
    align-self: center;
    font-weight: normal;
    text-align: center;
    margin: 0 auto 30px;
    background: #162447;
    border: 2px;
    border-radius: 5px;
    padding: 20px;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;

export const Hero = styled.div`
  margin: 5px;
  background: #162447;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;

  img {
    width: 80px;
    margin: 2px;
  }

  p {
    font-size: 1.2rem;
    margin: auto;
  }

  h3 {
    font-size: 2rem;
    margin-right: 10px;
  }

  button {
    width: fit-content;
    height: fit-content;
    align-self: center;
    border-radius: 5px;
    background: #883154;
    font-weight: bold;
    color: #fff;
    border: none;
  }

  @media screen and (min-width: 768px) {
    width: 450px;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const ChosenHero = styled.div`
  .chosen {
    background: #162447;
    width: fit-content;
    padding: 10px;
    margin: 10px auto;
    border-radius: 5px;
    border: 1px solid #fff;

    p {
      text-align: center;
      font-size: 1.5rem;
      color: #fff;
    }
  }
`;

export const CreateHero = styled.div`
  margin: 0 auto;

  form {
    display: flex;
    justify-content: center;

    input[type="text"] {
      background: #ececec;
      padding: 10px;
      border-radius: 5px;
      margin: 0 5px 20px 0;
    }

    input[type="submit"] {
      margin: 0 0px 20px 0;
      padding: 10px;
    }
  }
`;

export const BattleButton = styled.button`
  display: flex;
  width: 170px;
  height: 65px;
  margin: 10px auto;
  text-align: center;
  font-size: 2.7rem;
  font-weight: bold;
  font-style: italic;
  justify-content: center;
  align-items: center;
  background: #000839;
  color: #ffa41b;
  border: 2px solid #00a8cc;
  border-radius: 5px;

  @media screen and (min-width: 1400px) {
    font-size: 5rem;
    padding: 15px;
    width: auto;
    height: auto;
  }
`;

export const Result = styled.div`
  p {
    color: #fff;
    font-size: 2.7rem;
    text-align: center;
  }
`;
