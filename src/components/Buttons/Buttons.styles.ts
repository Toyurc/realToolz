import styled from 'styled-components';
import { ButtonProps } from './Button';

export const BaseButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: none;
  border-radius: 10px;
  padding: 20px;
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;
`;
