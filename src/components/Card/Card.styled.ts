import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  min-width: 25rem;
  min-height: 15rem;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 20px rgba(109, 123, 138, 0.2);

  &:hover {
    background-color: #79d49c;
  }
`;

export const StyleCardTitle = styled.h2`
  color: #5e6a76;
  font-style: normal;
  font-weight: 400;
  font-size: 3.6rem;
  line-height: 4.3rem;
  text-align: center;
  margin: 0;

  ${StyledWrapper}:hover & {
    color: #fff;
  }
`;

export const StyledCardDescription = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.6rem;
  text-align: center;
  color: #193d61;
  margin: 0;
`;
