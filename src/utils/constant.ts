import { LearningCardProps } from './../components/ListingCard/LearningCards';
import { ListingCardProps } from 'components/ListingCard/ListingCard';
import { FaBriefcase, FaMoneyBillWave } from 'react-icons/fa';
import { RouterLinkProps } from 'pages/LandingPage';
import Learning1 from 'assets/images/learning1.png';
import Learning2 from 'assets/images/learning2.png';
import Learning3 from 'assets/images/learning3.png';
import Learning4 from 'assets/images/learning4.png';
import Storage1 from 'assets/images/storage1.png';
import Storage2 from 'assets/images/storage2.png';
import Storage3 from 'assets/images/storage3.png';
import Chart from 'assets/images/sales.png';

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

export const LearningStorageArray: LearningCardProps[] = [
  {
    id: 1,
    imageUrl: Learning1,
    headerText: 'Everything you need to know about how to buy a Self Storage',
    timeLapsed: '5hrs ago',
    user: 'Raza',
    tagType: 'Buy',
  },
  {
    id: 2,
    imageUrl: Learning2,
    headerText: 'Learn Everything about managing and operating a Self Storage',
    timeLapsed: '2days ago',
    user: 'Raza',
    tagType: 'operate',
  },
  {
    id: 3,
    imageUrl: Learning3,
    headerText: 'Everything you need to know about selling a Self Storage',
    timeLapsed: '3days ago',
    user: 'Raza',
    tagType: 'sell',
  },
  {
    id: 4,
    imageUrl: Learning4,
    headerText: 'Everything you need to know about how to buy a Self Storage',
    timeLapsed: '5days ago',
    user: 'Raza',
    tagType: 'Buy',
  },
];

export const MENU_ITEMS = [
  {
    id: 1,
    title: 'Products',
    Icon: FaBriefcase,
    path: '/products',
  },
  {
    id: 2,
    title: 'Earnings',
    Icon: FaMoneyBillWave,
    path: '/earnings',
  },
  {
    id: 3,
    title: 'Settings',
    Icon: FaBriefcase,
    path: '/settings',
  },
];

type SummariesType = {
  id: number;
  title: string;
  value: string;
  chart_url?: string;
  analytics: {
    [key: string]: string;
  }[];
};

export const SUMMARIES: SummariesType[] = [
  {
    id: 1,
    title: 'Sales Page Visits',
    value: '2,300',
    chart_url: Chart,
    analytics: [
      {
        id: '1',
        page_visited: 'Product Name',
        time_visited: '20 mins ago',
        time_spent: '3 mins',
        status: 'Abandoned',
      },
      {
        id: '2',
        page_visited: 'Product Name',
        time_visited: '20 mins ago',
        time_spent: '3 mins',
        status: 'Abandoned',
      },
      {
        id: '3',
        page_visited: 'Product Name',
        time_visited: '20 mins ago',
        time_spent: '3 mins',
        status: 'Success',
      },
      {
        id: '4',
        page_visited: 'Product Name',
        time_visited: '20 mins ago',
        time_spent: '3 mins',
        status: 'Success',
      },
      {
        id: '5',
        page_visited: 'Product Name',
        time_visited: '20 mins ago',
        time_spent: '3 mins',
        status: 'Abandoned',
      },
      {
        id: '6',
        page_visited: 'Product Name',
        time_visited: '20 mins ago',
        time_spent: '3 mins',
        status: 'Success',
      },
    ],
  },
  {
    id: 2,
    title: 'Successful Sales',
    value: '1,250',
    analytics: [
      {
        id: '1',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '1,500',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
      {
        id: '2',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '1,500',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
      {
        id: '3',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '1,500',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
      {
        id: '4',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '1,500',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
      {
        id: '5',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '1,500',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
    ],
  },
  {
    id: 3,
    title: 'Gross Earnings',
    value: '$50,000',
    analytics: [
      {
        id: '1',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '1,500',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
      {
        id: '2',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '1,500',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
      {
        id: '3',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '50,000',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
      {
        id: '4',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '1,500',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
      {
        id: '5',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '1,500',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
    ],
  },
  {
    id: 4,
    title: 'Wallet Balance',
    value: '$200,000',
    analytics: [
      {
        id: '1',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '1,500',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
      {
        id: '2',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '1,500',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
      {
        id: '3',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '1,500',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
      {
        id: '4',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '1,500',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
      {
        id: '5',
        product: 'Product name',
        time_of_purchase: '20 mins ago',
        amount: '1,500',
        customer_name: 'John doe',
        customers_phone_number: '08163572641',
        customers_email: 'johndoe@email.com',
      },
    ],
  },
];
