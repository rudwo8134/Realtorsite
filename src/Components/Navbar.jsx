import React from 'react'
import styled,{css} from 'styled-components'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import {FaBars} from 'react-icons/fa'

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #000d1a;
    transform: scale(1.05) translateY(-2px);
  }
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  font-size: 1.6rem;
  font-weight: bold;
`

const Menubars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top:0;
    right: 0;
    transform: translate(-50%, 25%);

  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

const NavMenuLinks = styled(Link)`
  ${NavLink}
  font-weight: 400;
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({toggle}) => {
  return (
    <Nav>
      <Logo to="/">Eric.Shin</Logo>

      <Menubars onClick={toggle} />

      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          );
        })}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact us
        </Button>
      </NavBtn>
    </Nav>
  );
}

export default Navbar
