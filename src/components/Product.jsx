import React from "react";
import styled from "styled-components";

import plus from "../img/icons/plus.svg";
import { SuperLink } from "../styled/styled";

const Image = styled.div`
  background-image: url("${(props) => props.path}");
  background-position: center;
  background-size: cover;
  height: 450px;
  width: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  @media (max-width: 850px) {
    height: 90vh;
    width: 90vw;
    margin: 0 auto;
  }
`;

const Name = styled(SuperLink)`
  display: flex;
  font-size: 26px;
  padding: 5px;
  color: white;
  background-color: rgba(38, 70, 83, 0.8);
  width: 100%;
`;

const Icon = styled.div`
  position: absolute;
  background-color: yellowgreen;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.7);
  height: 28vw;
  width: 22vw;
  opacity: 0;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const Product = (props) => {
  const { id, name, description, price, forDog, model, image, added } =
    props.product;

  return (
    <div style={{ margin: 10 }}>
      <Image path={window.location.origin + image}>
        <Name to={`/product/${id}`}>{name}</Name>
        {/*<Icon img={plus} />*/}
      </Image>
    </div>
  );
};

export default Product;
