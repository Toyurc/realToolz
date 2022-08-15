import { Wrapper } from 'components/Wrapper/index.styles';
import { Link } from 'react-router-dom';
import { ReactComponent as ContainerLogo } from 'assets/icons/container.svg';
import { ReactComponent as BlueContainerLogo } from 'assets/icons/container-blue.svg';
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg';
import { ReactComponent as Twitter } from 'assets/icons/twitter.svg';
import { ReactComponent as LinkedIn } from 'assets/icons/linkedin.svg';
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg';
import ContainerImage from 'assets/images/containers.png';
import LadyImage from 'assets/images/lady-image.png';
import {
  ActiveListing,
  ActiveListingButton,
  ActiveListingGrid,
  Banner,
  ButtonContainer,
  ExploreSection,
  FeaturedStorage,
  Heading,
  LogoContainer,
  NavContainer,
  NavLinks,
  NavLinksContainer,
  NavListItem,
  Paragraph,
  QueriesSection,
  SelfStorage,
  SellSection,
  SellSectionContent,
  SellSectionImage,
  StorageFooter,
  StorageFooterWrapper,
  TextContainer,
  FooterInfo,
  QuickLinks,
  NewsLetter,
  Socials,
  IconsContainer,
  NewsButton,
  QueryCard,
  QueryContent,
  ExploreAndLearn,
  ExploreCardContainer,
  SellSectionWrapper,
  SelfStorageImage,
} from './index.styles';
import Button, { Colors } from 'components/Buttons/Button';
import SectionHeading from 'components/SectionHeading/SectionHeading';
import { FeaturedStorageArray, LearningStorageArray, Links } from 'utils/constant';
import ListingCard from 'components/ListingCard/ListingCard';
import LearningCard from 'components/ListingCard/LearningCards';

export type RouterLinkProps = {
  id: number;
  name: string;
  route: string;
};

const RouteLink = ({ name, route }: Omit<RouterLinkProps, 'id'>) => (
  <Link to={route}>
    <NavListItem>{name}</NavListItem>
  </Link>
);

const LandingPage = () => {
  return (
    <>
      <Banner>
        <Wrapper>
          <NavLinks>
            <LogoContainer to={'/'}>
              <ContainerLogo />
              &nbsp;<span>StorageConnect</span>
            </LogoContainer>
            <NavContainer>
              <NavLinksContainer>
                {Links.map((link) => (
                  <RouteLink key={link.id} name={link.name} route={link.route} />
                ))}
              </NavLinksContainer>
              <Button
                padding="0.8rem 1.8rem"
                color={Colors.black}
                background={Colors.yellow}
              >
                contact
              </Button>
            </NavContainer>
          </NavLinks>
          <TextContainer>
            <Heading>Self Storage Business Buy. Sell. Learn.</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sagittis,
              aliquam non tortor blandit lobortis. blandit
            </Paragraph>
            <ButtonContainer>
              <Button color={Colors.black} background={Colors.yellow}>
                Sell Your Self Storage
              </Button>
              <Button color={Colors.black} background={Colors.white}>
                Active Self Storage Listings
              </Button>
            </ButtonContainer>
          </TextContainer>
        </Wrapper>
      </Banner>
      <FeaturedStorage>
        <Wrapper>
          <SectionHeading
            header={'Featured Self Storages'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare'
            }
          />
          <ActiveListingGrid>
            {FeaturedStorageArray.map((storage) => (
              <ListingCard
                key={storage.id}
                headerText={storage.headerText}
                imageUrl={storage.imageUrl}
                location={storage.location}
                totalUnits={storage.totalUnits}
                landMass={storage.landMass}
                totalOccupant={storage.totalOccupant}
              />
            ))}
          </ActiveListingGrid>
        </Wrapper>
      </FeaturedStorage>
      <ActiveListing>
        <Wrapper>
          <SectionHeading
            header={'active Listing Self Storages'}
            description={
              'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare'
            }
            headerColor={Colors.white}
            descriptionColor={Colors.white}
          />
          <ActiveListingGrid>
            {FeaturedStorageArray.map((storage) => (
              <ListingCard
                key={storage.id}
                headerText={storage.headerText}
                imageUrl={storage.imageUrl}
                location={storage.location}
                totalUnits={storage.totalUnits}
                landMass={storage.landMass}
                totalOccupant={storage.totalOccupant}
              />
            ))}
          </ActiveListingGrid>
          <ActiveListingGrid>
            {FeaturedStorageArray.map((storage) => (
              <ListingCard
                key={storage.id}
                headerText={storage.headerText}
                imageUrl={storage.imageUrl}
                location={storage.location}
                totalUnits={storage.totalUnits}
                landMass={storage.landMass}
                totalOccupant={storage.totalOccupant}
              />
            ))}
          </ActiveListingGrid>
          <ActiveListingButton
            padding="2rem 4rem"
            color={Colors.black}
            background={Colors.yellow}
          >
            view more listing
          </ActiveListingButton>
        </Wrapper>
      </ActiveListing>
      <SellSection>
        <SellSectionWrapper>
          <SellSectionContent>
            <SectionHeading
              header={'Do you have a Self Storage for Sale?'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet proin scelerisque nunc.'
              }
            />
            <Button color={Colors.white} background={Colors.blue}>
              sell your self storage
            </Button>
          </SellSectionContent>
          <SellSectionImage>
            <img src={ContainerImage} alt="human with container" />
          </SellSectionImage>
        </SellSectionWrapper>
      </SellSection>
      <SelfStorage>
        <SellSectionWrapper>
          <SelfStorageImage>
            <img src={LadyImage} alt="lady on suit" />
          </SelfStorageImage>
          <SellSectionContent>
            <SectionHeading
              header={'Do you want to buy a Self Storage?'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet proin scelerisque nunc.'
              }
            />
            <Button color={Colors.white} background={Colors.blue}>
              sell your self storage
            </Button>
          </SellSectionContent>
        </SellSectionWrapper>
      </SelfStorage>
      <ExploreSection>
        <Wrapper>
          <ExploreAndLearn>
            <SectionHeading
              header={
                'Learn Everything About Buying, Selling, and Operating a Self Storage'
              }
              description={
                'Learn about literally anything to know about Selling or Buying a Self Storage'
              }
              headerColor={Colors.white}
              descriptionColor={Colors.white}
            />
            <ExploreCardContainer>
              {LearningStorageArray.map((storage) => (
                <LearningCard
                  key={storage.id}
                  headerText={storage.headerText}
                  imageUrl={storage.imageUrl}
                  timeLapsed={storage.timeLapsed}
                  user={storage.user}
                  tagType={storage.tagType}
                />
              ))}
            </ExploreCardContainer>
            <Button color={Colors.black} background={Colors.yellow}>
              Explore the Learning Section
            </Button>
          </ExploreAndLearn>
        </Wrapper>
      </ExploreSection>
      <QueriesSection>
        <QueryCard>
          <QueryContent>
            <h2>Any Queries? Reach Out to Us</h2>
            <p>Feel free to write to us, we are happy to help you</p>
          </QueryContent>
          {/* TODO: Add icons to buttons */}
          <Button color={Colors.white} background={Colors.blue}>
            Write to us
          </Button>
        </QueryCard>
      </QueriesSection>
      <StorageFooterWrapper>
        <Wrapper>
          <StorageFooter>
            <FooterInfo>
              <LogoContainer textcolor={Colors.black} to={'/'}>
                <BlueContainerLogo />
                <span>StorageConnect</span>
              </LogoContainer>
              <p>
                Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt
                sit amet sed libero.
              </p>
              <span>&copy; StorageConnect 2022, All Rights Reserved</span>
            </FooterInfo>
            <QuickLinks>
              <h4>quick links</h4>
              <ul>
                <li>active listing</li>
                <li>sell your self storage</li>
                <li>free evaluation</li>
                <li>learn</li>
              </ul>
            </QuickLinks>
            <NewsLetter>
              <h4>newsletter</h4>
              <input placeholder="Enter your email" />
              <NewsButton color={Colors.white} background={Colors.blue}>
                subscribe now
              </NewsButton>
            </NewsLetter>
            <Socials>
              <h4>let&apos;s get social</h4>
              <IconsContainer>
                <Facebook />
                <LinkedIn />
                <Twitter />
                <Instagram />
              </IconsContainer>
              {/* TODO: create custom select to hold image and icon */}
              <select title="select language">
                <option>english</option>
              </select>
            </Socials>
          </StorageFooter>
        </Wrapper>
      </StorageFooterWrapper>
    </>
  );
};

export default LandingPage;
