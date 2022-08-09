import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BannerImage from '../../assets/images/landing-page-banner.png';
import SellImage from '../../assets/images/sell-bg.png';
import ActiveListingImage from '../../assets/images/active-listing.png';
import ExploreSectionImage from '../../assets/images/explore-bg.png';
import QueriesSectionImage from '../../assets/images/queries-bg.png';
import Button from 'components/Buttons/Button';

export const Banner = styled.section`
  background-image: url(${BannerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 61rem;
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
    line-height: 2.2rem;
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
  margin-right: 2rem;
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
  background-color: #fff;
`;

export const ActiveListing = styled.section`
  background-image: url(${ActiveListingImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 8rem;
`;

export const ActiveListingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin: 0 auto;
  padding: 1rem;
  margin-top: 3rem;
`;

export const ActiveListingButton = styled(Button)`
  display: flex;
  align-items: center;
  margin: 1.5rem auto;
  margin-top: 3rem;
`;

export const SellSection = styled.section`
  background-image: url(${SellImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 8rem;
  display: flex;
`;

export const SellSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

export const SellSectionImage = styled.div`
  width: 68rem;
  height: 68rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SelfStorage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

export const ExploreSection = styled.section`
  background-image: url(${ExploreSectionImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const QueriesSection = styled.section`
  background-image: url(${QueriesSectionImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StorageFooterWrapper = styled.footer`
  background-color: #fff;
`;

export const StorageFooter = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr 1fr max-content;
`;
