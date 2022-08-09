import styled from 'styled-components';
import { FaSignOutAlt } from 'react-icons/fa';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #193d61;
  padding: 30px 0px 0px;
  min-width: 24rem;
  min-height: 95vh;
`;

export const StyledMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1rem;
  width: 100%;
`;

export const StyledMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  width: 100%;
  padding: 2rem 3rem;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;

  :nth-child(2) {
    background: rgba(1, 26, 51, 0.71);
  }
`;

export const StyledMenuText = styled.h3`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #fff;
  margin: 0px;
`;

export const StyledSignOutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  margin-bottom: 20rem;
  cursor: pointer;
  padding: 0px 3rem;
  align-items: center;
`;

export const StyledSignOutLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const StyleSignOutIcon = styled(FaSignOutAlt)`
  color: #79d49c;
`;
