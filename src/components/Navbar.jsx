import React, { useContext } from "react";
import styled from "styled-components";
import {
  SuperLink,
  ListItem,
  ListWrapper,
  ListItemHovered,
} from "../styled/styled";

import search from "../img/icons/search.svg";
import bag from "../img/icons/bag.png";
import { AppContext } from "../context/AppContext";

const Box = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1600px;
  transition: 0.3s;
  background-color: ${(props) => (props.visible ? "#6E7271" : "")};
  z-index: 999;
`;

const Icon = styled.div`
  background-image: url(${(props) => props.img});
  height: 38px;
  width: 38px;
  background-size: cover;
  background-position: center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Navbar = () => {
  const { navBcg } = useContext(AppContext);

  return (
    <Box visible={navBcg}>
      <ListWrapper>
        <ListItem>
          <SuperLink to="/">
            <h1>FERA</h1>
          </SuperLink>
        </ListItem>
        <ListItemHovered>
          <SuperLink to="/dogs">PSY</SuperLink>
        </ListItemHovered>
        <ListItemHovered>
          <SuperLink to="/cats">KOTY</SuperLink>
        </ListItemHovered>
        <ListItemHovered>
          <SuperLink to="/humans">LUDZIE</SuperLink>
        </ListItemHovered>
        <ListItemHovered>
          <SuperLink to="/others">AKCESORIA</SuperLink>
        </ListItemHovered>
      </ListWrapper>
      <ListWrapper>
        <ListItem>
          <Icon img={bag} />
        </ListItem>
        <ListItem>
          <Icon img={search} />
        </ListItem>
      </ListWrapper>
    </Box>
  );
};

export default Navbar;
