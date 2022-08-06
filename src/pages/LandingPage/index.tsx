import { Wrapper } from 'components/Wrapper/index.styles';
import { Link } from 'react-router-dom';
import { ReactComponent as ContainerLogo } from 'assets/icons/container.svg';
import {
  Banner,
  ButtonContainer,
  FeaturedStorage,
  Heading,
  LogoContainer,
  NavContainer,
  NavLinks,
  NavLinksContainer,
  NavListItem,
  Paragraph,
  TextContainer,
} from './index.styles';
import Button, { ButtonColors } from 'components/Buttons/Button';
import SectionHeading from 'components/SectionHeading/SectionHeading';

type RouterLinkProps = {
  id: number;
  name: string;
  route: string;
};

const RouteLink = ({ name, route }: Omit<RouterLinkProps, 'id'>) => (
  <Link to={route}>
    <NavListItem>{name}</NavListItem>
  </Link>
);

const Links: RouterLinkProps[] = [
  {
    id: 1,
    name: 'active listings',
    route: '#',
  },
  {
    id: 2,
    name: 'sell your self storage',
    route: '#',
  },
  {
    id: 3,
    name: 'free evaluation',
    route: '#',
  },
  {
    id: 4,
    name: 'learn',
    route: '#',
  },
];

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
                color={ButtonColors.black}
                background={ButtonColors.yellow}
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
              <Button color={ButtonColors.black} background={ButtonColors.yellow}>
                Sell Your Self Storage
              </Button>
              <Button color={ButtonColors.black} background={ButtonColors.white}>
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
        </Wrapper>
      </FeaturedStorage>
    </>
  );
};

export default LandingPage;
