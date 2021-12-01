import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import styled from "styled-components";
import { useParams } from "react-router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  width: 100%;
  padding: 10px;

  @media (max-width: 815px) {
    flex-direction: column;
    height: auto;
  } ;
`;

const Gallery = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 800px;

  @media (max-width: 815px) {
    height: 100vh;
    width: 90vw;
    margin: 0 auto;
    background-position: top;
  }
`;

const InfoSection = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 100px;

  @media (max-width: 850px) {
    padding: 0;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  color: black;
  font-weight: bold;
`;

const Amount = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;

  @media (max-width: 815px) {
    padding: 0;
  }
`;

const AmountButton = styled.button`
  font-size: 20px;
  height: 40px;
  width: 40px;
  background-color: transparent;
  color: black;
  outline: none;
  border: 2px solid black;
  transition: 0.3s;

  &:hover {
    color: whitesmoke;
    background-color: black;
  }
`;

const Input = styled.input`
  background-color: transparent;
  color: black;
  box-sizing: border-box;
  outline: none;
  height: 40px;
  width: 80px;
  text-align: center;
  font-size: 20px;
  border: none;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

const Price = styled.p`
  margin-top: 50px;
  font-size: 32px;
  color: black;
  font-weight: bold;
`;

const Button = styled.button`
  width: 160px;
  border: 2px solid black;
  font-size: 20px;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
  transition: 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: black;
    color: whitesmoke;
  }
`;

const Info = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ddd;
  padding: 10px;
  margin: 0 10px;
`;

const SingleInfo = styled.li`
  text-decoration: none;
  list-style: none;
  color: black;
  padding: 5px;
  font-weight: bolder;
`;

const Wrapperr = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    width: 80vw;
  }
`;

const ProductPage = (props) => {
  const { id } = useParams();
  const { myData, getData, setBcg } = useContext(AppContext);

  const [productAmount, setProductAmount] = useState(1);

  const handleChangeAmount = (e) => {
    setProductAmount(e.target.value);
  };

  const product = myData.products.find(
    (item) => parseInt(item.id) === parseInt(id)
  );

  useEffect(() => {
    getData();
    setBcg();
  }, []);

  return (
    <>
      {product && (
        <Wrapper>
          <div style={{ height: "100px", width: "100%" }}></div>
          <Top>
            <Gallery img={product.image}></Gallery>
            <InfoSection>
              <Wrapperr>
                <div>
                  <Title>{product.name}</Title>
                  <p>{product.description}</p>
                </div>
                <Amount>
                  <Price>{product.price}PLN</Price>
                  <AmountButton
                    onClick={() => setProductAmount(productAmount - 1)}
                  >
                    -
                  </AmountButton>
                  <Input
                    type="text"
                    value={productAmount}
                    onChange={handleChangeAmount}
                  />
                  <AmountButton
                    onClick={() => setProductAmount(productAmount + 1)}
                  >
                    +
                  </AmountButton>
                </Amount>
                <Button onClick={() => console.log("dodaj")}>Dodaj</Button>
              </Wrapperr>
            </InfoSection>
          </Top>
          <div>
            <Info>
              <SingleInfo>Model: {product.model} /</SingleInfo>
              <SingleInfo>Produkt dla: {product.forDog} /</SingleInfo>
              <SingleInfo>Dodano: {product.added} /</SingleInfo>
              <SingleInfo>Kolekcja: {product.collection}</SingleInfo>
            </Info>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default ProductPage;
