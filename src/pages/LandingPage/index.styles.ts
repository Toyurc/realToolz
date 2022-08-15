import { Wrapper } from './../../components/Wrapper/index.styles';
import { Colors } from './../../components/Buttons/Button';
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

export const LogoContainer = styled(Link)<{ textcolor?: Colors }>`
  display: flex;
  align-items: center;
  color: #fff;
  column-gap: 0.8rem;

  > span {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.2rem;
    color: ${(props) => props.textcolor || 'inherit'};
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
  display: flex;
  border-bottom-right-radius: 30rem;
  overflow: hidden;
`;

export const SellSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  > header {
    text-align: left;
  }

  > button {
    width: 24rem;
    margin-top: 1.6rem;
  }
`;

export const SellSectionWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SellSectionImage = styled.div`
  width: 68rem;
  height: 68rem;
  margin-top: 2rem;
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

export const SelfStorageImage = styled.div`
  width: 68rem;
  height: 68rem;
  margin-bottom: -8rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ExploreSection = styled.section`
  background-image: url(${ExploreSectionImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: 30rem;
  overflow: hidden;
`;

export const ExploreAndLearn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  align-items: center;
  margin-bottom: 3rem;
`;

export const ExploreCardContainer = styled.div`
  display: flex;
  column-gap: 1.6rem;
`;

export const QueriesSection = styled.section`
  background-image: url(${QueriesSectionImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20rem 8rem;
`;

export const QueryCard = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 30px 40px rgba(24, 73, 198, 0.1);
  border-radius: 10px;
  padding: 10rem 8rem;
  column-gap: 2rem;
  align-items: center;
`;

export const QueryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;

  > h2 {
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 3rem;
    color: #021850;
  }

  > p {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 3rem;
    color: rgba(0, 1, 3, 0.7);
  }
`;

export const StorageFooterWrapper = styled.footer`
  background-color: #fff;
`;

export const StorageFooter = styled.div`
  display: grid;
  padding: 3rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  column-gap: 4rem;
  font-family: 'Roboto';
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;

  > p,
  > span {
    color: #4a4a4a;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

export const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;

  > h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #2f2f2f;
    text-transform: uppercase;
  }

  > ul {
    margin: 0;
    padding: 0;
    color: #4a4a4a;
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
    > li {
      list-style: none;
      text-transform: capitalize;
    }
  }
`;

export const NewsLetter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;

  > h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #2f2f2f;
    text-transform: uppercase;
  }

  > label {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #4a4a4a;
  }

  > input {
    width: 25rem;
    padding: 0.8rem;
    border: 1px solid #e8efff;
    border-radius: 5px;
  }
`;

export const NewsButton = styled(Button)`
  width: 20rem;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;

  > h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #2f2f2f;
    text-transform: uppercase;
  }

  > select {
    width: 21rem;
    padding: 0.8rem;
    border-radius: 3px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  column-gap: 0.8rem;
`;
