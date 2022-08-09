import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  padding: 20px 40px;
  justify-content: space-between;
  width: 95%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const NavLink = styled.a`
  color: #808080;
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  padding: 0.8rem 2.4rem;
  height: 100%;
  cursor: pointer;
  border-radius: 8px;
  padding: 0px;
`;
