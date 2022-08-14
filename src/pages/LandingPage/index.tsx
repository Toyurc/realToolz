import { Wrapper } from 'components/Wrapper/index.styles';
import { Link } from 'react-router-dom';
import { ReactComponent as ContainerLogo } from 'assets/icons/container.svg';
import { ReactComponent as BlueContainerLogo } from 'assets/icons/container-blue.svg';
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
} from './index.styles';
import Button, { Colors } from 'components/Buttons/Button';
import SectionHeading from 'components/SectionHeading/SectionHeading';
import { FeaturedStorageArray, Links } from 'utils/constant';
import ListingCard from 'components/ListingCard/ListingCard';

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
        <Wrapper>
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
        </Wrapper>
      </SellSection>
      <SelfStorage>
        <Wrapper>
          <SellSectionImage>
            <img src={LadyImage} alt="human with container" />
          </SellSectionImage>
          <div>
            <SectionHeading
              header={'Do you want to buy a Self Storage?'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet proin scelerisque nunc.'
              }
            />
            <Button color={Colors.white} background={Colors.blue}>
              sell your self storage
            </Button>
          </div>
        </Wrapper>
      </SelfStorage>
      <ExploreSection>
        <Wrapper>
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
          <Button color={Colors.black} background={Colors.yellow}>
            Explore the Learning Section
          </Button>
        </Wrapper>
      </ExploreSection>
      <QueriesSection>
        <div>
          <SectionHeading
            header={'Any Queries? Reach Out to Us'}
            description={'Feel free to write to us, we are happy to help you'}
            headerColor={Colors.blue}
            descriptionColor={Colors.black}
          />
        </div>
      </QueriesSection>
      <StorageFooterWrapper>
        <Wrapper>
          <StorageFooter>
            <FooterInfo>
              <LogoContainer textColor={Colors.black} to={'/'}>
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
              <Button color={Colors.white} background={Colors.blue}>
                subscribe now
              </Button>
            </NewsLetter>
            <div>
              <h4>let&apos;s get social</h4>
              <select title="select language">
                <option>english</option>
              </select>
            </div>
          </StorageFooter>
        </Wrapper>
      </StorageFooterWrapper>
    </>
  );
};

export default LandingPage;
