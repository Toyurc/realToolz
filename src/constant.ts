import { ListingCardProps } from 'components/ListingCard/ListingCard';
import { RouterLinkProps } from 'pages/LandingPage';
import Storage1 from './assets/images/storage1.png';
import Storage2 from './assets/images/storage2.png';
import Storage3 from './assets/images/storage3.png';

export const Links: RouterLinkProps[] = [
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

export const FeaturedStorageArray: ListingCardProps[] = [
  {
    id: 1,
    imageUrl: Storage1,
    headerText: 'Heading of this Self Storage',
    totalOccupant: '50%',
    totalUnits: 89,
    location: 'Jersey City, NJ',
    landMass: '40,233',
  },
  {
    id: 2,
    imageUrl: Storage2,
    headerText: 'Heading of this Self Storage',
    totalOccupant: '50%',
    totalUnits: 89,
    location: 'Jersey City, NJ',
    landMass: '40,233',
  },
  {
    id: 3,
    imageUrl: Storage3,
    headerText: 'Heading of this Self Storage',
    totalOccupant: '50%',
    totalUnits: 89,
    location: 'Jersey City, NJ',
    landMass: '40,233',
  },
];
