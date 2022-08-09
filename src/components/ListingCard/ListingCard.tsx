import Button, { Colors } from 'components/Buttons/Button';
import { ReactComponent as LocationIcon } from 'assets/icons/location.svg';
import { ReactComponent as HouseIcon } from 'assets/icons/building.svg';
import { ReactComponent as TenantIcon } from 'assets/icons/people.svg';
import { ReactComponent as SizeIcon } from 'assets/icons/space.svg';

import {
  ListingCardButton,
  ListingCardContainer,
  ListingCardContent,
  ListingCardDetailsContainer,
  ListingDetailsItem,
  ListingDetailsItemWrapper,
  ListingImageContainer,
} from './ListingCard.styles';

export type ListingCardProps = {
  id: number;
  bgColor?: Colors;
  imageUrl: string;
  headerText?: string;
  location: string;
  totalUnits: number;
  landMass: string;
  totalOccupant: string;
};

const ListingCard = ({
  bgColor,
  imageUrl,
  headerText,
  location,
  totalUnits,
  landMass,
  totalOccupant,
}: Omit<ListingCardProps, 'id'>) => {
  return (
    <ListingCardContainer bgColor={bgColor}>
      <ListingImageContainer>
        <img src={imageUrl} alt={'storage'} />
      </ListingImageContainer>
      <ListingCardContent>
        <h3>{headerText}</h3>
        <ListingDetailsItemWrapper>
          <ListingCardDetailsContainer>
            <ListingDetailsItem>
              <LocationIcon />
              &nbsp;{location}
            </ListingDetailsItem>
            <ListingDetailsItem>
              <SizeIcon />
              Size: {landMass}&nbsp;Sq Ft
            </ListingDetailsItem>
          </ListingCardDetailsContainer>
          <ListingCardDetailsContainer>
            <ListingDetailsItem>
              <HouseIcon />
              Total Units:&nbsp;{totalUnits}
            </ListingDetailsItem>
            <ListingDetailsItem>
              <TenantIcon />
              Occupancy:&nbsp;{totalOccupant}
            </ListingDetailsItem>
          </ListingCardDetailsContainer>
        </ListingDetailsItemWrapper>
      </ListingCardContent>
      <ListingCardButton color={Colors.white} background={Colors.blue}>
        view more detail
      </ListingCardButton>
    </ListingCardContainer>
  );
};

export default ListingCard;
