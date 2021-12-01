import React from "react";
import styled from "styled-components";
import {SuperLink} from "../styled/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Item = styled.p`
  font-size: 14px;
  color: whitesmoke;
  padding: 10px 30px;
`

const Icon = styled.div`
  background-color: darkred;
  height: 20px;
  width: 20px;
`

const Contact = () => {

    return(
        <Wrapper style={{borderBottom: "2px solid #ddd", padding: "10px"}}>
            <Wrapper>
                <Item>Polska | PLN </Item>
                <Item>Kontakt</Item>
            </Wrapper>
            <SuperLink>Zaloguj/Zarejestruj</SuperLink>
            <Icon/>
            <SuperLink>Torba</SuperLink>
        </Wrapper>
    )
}

export default Contact;
