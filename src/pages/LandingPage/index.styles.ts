import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BannerImage from '../../assets/images/landing-page-banner.png';
import ActiveListingImage from '../../assets/images/active-listing.png';

export const Banner = styled.section`
  background-image: url(${BannerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 610px;
`;

export const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  column-gap: 0.8rem;

  > span {
    font-weight: 600;
    font-size: 2rem;
    line-height: 22px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
`;

export const NavLinksContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 500;
  color: #000;
`;

export const NavListItem = styled.li`
  list-style: none;
  margin-right: 20px;
  cursor: pointer;
  color: #fff;
  text-transform: capitalize;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 67rem;
  margin: 0 auto;
  margin-top: 10rem;
`;

export const Heading = styled.h1`
  font-size: 6rem;
  font-weight: 600;
  line-height: 7.5rem;
  color: #fff;
  text-align: center;
  margin: 1rem;
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3.3rem;
  color: #fff;
  margin: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 0.8rem;
  align-items: center;
  justify-content: center;
  margin: 4.8rem auto;
  width: 100%;
`;

export const FeaturedStorage = styled.section`
  display: flex;
  background-color: #f5f5f5;
`;

export const ActiveListing = styled.section`
  background-image: url(${ActiveListingImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
