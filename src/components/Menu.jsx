import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  li {
    margin: 0 1rem 0 0;
    a {
      padding: 1rem 0;
    }
  }
  li:last-child {
    margin-right: 0;
  }
`;

const Menu = () => (
  <StyledMenu>
    <li>
      <Link to={'/'}>Inicio</Link>
    </li>
    <li>
      <Link to={'/press'}>Prensa</Link>
    </li>
    <li>
      <Link to={'/cv'}>CV</Link>
    </li>
    <li>
      <Link to={'/contact'}>Contacto</Link>
    </li>
  </StyledMenu>
);

export default Menu;
