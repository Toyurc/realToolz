import styled from 'styled-components';
import { ButtonProps } from './Button';

export const BaseButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: none;
  border-radius: 1;
  padding: ${(props) => props.padding || '1.5rem 2rem'};
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;
  text-transform: capitalize;
`;
