import Button from 'components/Buttons/Button';
import styled from 'styled-components';
import { ListingCardProps } from './ListingCard';

export const ListingCardContainer = styled.div<Pick<ListingCardProps, 'bgColor'>>`
  padding: 2rem;
  background-color: ${(props) => props.bgColor || '#f9f9f9'};
  border: 1px solid ${(props) => props.bgColor || '#f9f9f9'};
  border-radius: 1rem;
  max-width: 38rem;
  box-sizing: border-box;
`;

export const ListingImageContainer = styled.div`
  width: 100%;
  height: 25rem;
  background-color: #f9f9f9;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ListingCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  h3 {
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3rem;
    color: #2f2f2f;
    margin: 2rem 0;
  }
`;

export const ListingCardDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  width: 100%;
  row-gap: 1.5rem;
  margin-bottom: 2rem;
  flex-direction: column;
`;

export const ListingDetailsItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListingDetailsItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
`;

export const ListingCardButton = styled(Button)`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1.2rem 3rem;
`;

export const LearnCardContainer = styled(ListingCardContainer)`
  padding: 0.4rem;
  padding-bottom: 1rem;
`;

export const LearningDetailsItemWrapper = styled(ListingDetailsItemWrapper)`
  flex-direction: row;
`;
