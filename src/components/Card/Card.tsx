import React from 'react';

import { StyleCardTitle, StyledCardDescription, StyledWrapper } from './Card.styled';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <StyledWrapper>
      <StyleCardTitle>{description}</StyleCardTitle>
      <StyledCardDescription>{title}</StyledCardDescription>
    </StyledWrapper>
  );
};

export default Card;
