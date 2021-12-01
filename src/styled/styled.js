import styled from "styled-components";
import {Link} from "react-router-dom";

export const SuperLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: whitesmoke;
  font-size: 14px;
`

export const ExtendedSuperLink = styled(SuperLink)`
  font-size: 14px;
  color: black;
  
`

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  padding: 5px;
`

export const ListItem = styled.li`
  display: block;
  list-style: none;
  font-size: 20px;
  padding: 10px;
  text-align: center;
`

export const ListItemHovered = styled(ListItem)`
  transition: .3s;

  &:hover {
    transform: scale(1.2);
  }
  
`
