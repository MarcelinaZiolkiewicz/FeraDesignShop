import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { SuperLink } from "../styled/styled";

import bcg from "../img/1_4.jpeg";
import legowiska from "../img/legowisko_1.jpeg";
import ubranka from "../img/ubranko_1.jpeg";
import TopProducts from "../components/TopProducts";
import { AppContext } from "../context/AppContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  background-color: whitesmoke;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${bcg});
  height: 90vh;
  width: 100%;
  background-position: top;
  background-repeat: no-repeat;
`;

const Product = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background-image: url(${(props) => props.img});
  height: 90vh;
  min-width: 49%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 850px) {
    width: 90vw;
    margin: 10px auto;
    background-position: top;
  }
`;

const Label = styled.p`
  font-size: 40px;
  color: whitesmoke;
  padding: 20px;
`;

const Discover = styled(SuperLink)`
  display: inline-block;
  font-size: 18px;
  margin-right: 20px;
  padding: 10px;
  color: ${(props) => props.start};
  border-bottom: 2px solid ${(props) => props.start};
  transition: all 0.15s ease-in;
  background: linear-gradient(
    to top,
    ${(props) => props.start} 50%,
    transparent 50%
  );
  background-size: 100% 200%;
  background-position: top;

  &:hover {
    background-position: bottom;
    color: ${(props) => props.end};
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CenterText = styled.p`
  background-color: #ddd;
  opacity: 0.8;
  color: black;
  font-size: 42px;
  padding: 10px;
  font-weight: bold;
  width: 25vw;

  @media (max-width: 850px) {
    width: 80vw;
  }
`;
const SmallerText = styled(CenterText)`
  font-size: 20px;
`;

const Footer = styled.p`
  height: 100px;
  color: black;
  font-size: 22px;
  background-color: whitesmoke;
  text-align: center;
  padding-top: 40px;
`;

const Home = () => {
  const { resetDiffPath } = useContext(AppContext);

  useEffect(() => {
    resetDiffPath();
  }, []);

  return (
    <>
      <Background>
        <CenterText>FERA HOLIDAY 2021</CenterText>
        <SmallerText>
          Sprawdź już teraz kolekcje na specjalne okazje
        </SmallerText>
        <SmallerText>
          <Discover start="black" end="whitesmoke" to="/newCollection">
            zobacz
          </Discover>
        </SmallerText>
      </Background>
      <Wrapper>
        <Product img={legowiska}>
          <Box>
            <Label>Legowiska</Label>
            <Discover to="/others" start="whitesmoke" end="black">
              przeglądaj
            </Discover>
          </Box>
        </Product>
        <Product img={ubranka}>
          <Box>
            <Label>Ubranka</Label>
            <Discover to="/dogs" start="whitesmoke" end="black">
              przeglądaj
            </Discover>
          </Box>
        </Product>
      </Wrapper>

      <TopProducts />

      <Footer>@Michau | 2021</Footer>
    </>
  );
};

export default Home;
