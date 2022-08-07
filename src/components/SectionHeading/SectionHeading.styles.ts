import { SectionHeadingProps } from './SectionHeading';
import styled from 'styled-components';

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 67rem;
  text-align: center;
  text-transform: capitalize;
`;

export const SectionHeadingText = styled.h1<Pick<SectionHeadingProps, 'headerColor'>>`
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 3rem;
  color: ${(props) => props.headerColor || '#021850'};
  margin: 1rem 0;
`;

export const SectionDescription = styled.p<Pick<SectionHeadingProps, 'descriptionColor'>>`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 3rem;
  margin: 0;
  color: ${(props) => props.descriptionColor || '#000103B2'};
`;
