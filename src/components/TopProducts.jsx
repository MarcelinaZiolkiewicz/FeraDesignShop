import React, { useEffect, useContext } from "react";
import Product from "./Product";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Title = styled.p`
  font-size: 32px;
  color: black;
  text-align: left;
  font-weight: bold;
  padding: 20px;
`;

const TopProducts = () => {
  const { getData, firstFour } = useContext(AppContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ backgroundColor: "whitesmoke", padding: 10 }}>
      <Title>Nowość!</Title>
      <Wrapper>
        {firstFour.length > 0 &&
          firstFour.map((item) => <Product key={item.id} product={item} />)}
      </Wrapper>
    </div>
  );
};

export default TopProducts;
