import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import piwosz from "../img/piwosz.jpeg";
import tancerz from "../img/tancerz.jpeg";
import freddie from "../img/freddie.jpeg";
import elio from "../img/elio.jpeg";

import { AppContext } from "../context/AppContext";

const Image = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  height: 450px;
  width: 350px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 10px;
`;

const Wrapper = styled.div`
  padding-top: 100px;
`;

const Label = styled.p`
  font-size: 20px;
  background-color: rgba(38, 70, 83, 0.8);
  padding: 10px;
  color: whitesmoke;
  font-weight: bold;
`;

const AboutText = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto 80px auto;
  width: 60vw;
`;

const Footer = styled.p`
  height: 80px;
  color: black;
  font-size: 22px;
  background-color: whitesmoke;
  text-align: center;
  padding-top: 40px;
  margin-top: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const About = () => {
  const { setBcg } = useContext(AppContext);

  useEffect(() => {
    setBcg();
  }, []);

  return (
    <Wrapper>
      <div style={{ height: "200px", textAlign: "center" }}>
        <h1 style={{ fontSize: 45, padding: "20px" }}>FERA TO MY</h1>
      </div>
      <AboutText>
        <h1>FERA DESIGN</h1>
        <p>
          Jesteśmy młodym zespołem składającym się z 2 osób i 2 piesków.
          Projektujemy, szyjemy, przymierzamy, korzystamy z naszych tworów i
          chcemy się nimi podzilić ze światem. Korzystamy tylko z
          wyselekcjonowanych i ekskluzywnych materiałów tak by zapewnić
          niebywałą jakość naszych produktów, przez to ceny naszych produktów
          nie są najniższe. Kupując nasze produkty wspierasz polski biznes i
          nasze przyszłe wakacje we Włoszech.
        </p>
      </AboutText>
      <ImageWrapper>
        <Image img={freddie}>
          <Label>Jak Cię nie znam to jesteś obszczekany gnoju ~ Freddie</Label>
        </Image>
        <Image img={elio}>
          <Label>Kompletnie Cię nie znam ale już Cię kocham ~ Elio</Label>
        </Image>
        <Image img={piwosz}>
          <Label>Po dobrym browarku mam lepsze pomysły ~ Rafał</Label>
        </Image>
        <Image img={tancerz}>
          <Label>Lubię tańczyć bo to fajne i wgl ~ Adam</Label>
        </Image>
      </ImageWrapper>
      <Footer>@Michau | 2021</Footer>
    </Wrapper>
  );
};

export default About;
