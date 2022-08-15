import { Colors } from 'components/Buttons/Button';
import { ReactComponent as ClockIcon } from 'assets/icons/clock.svg';
import { ReactComponent as TagIcon } from 'assets/icons/tag.svg';
import { ReactComponent as AvatarIcon } from 'assets/icons/avatar.svg';

import {
  LearnCardContainer,
  LearningDetailsItemWrapper,
  ListingCardButton,
  ListingCardContent,
  ListingDetailsItem,
  ListingImageContainer,
} from './ListingCard.styles';

export type LearningCardProps = {
  id: number;
  imageUrl: string;
  headerText?: string;
  timeLapsed: string;
  user: string;
  tagType: string;
};

const LearningCard = ({
  imageUrl,
  headerText,
  timeLapsed,
  user,
  tagType,
}: Omit<LearningCardProps, 'id'>) => {
  return (
    <LearnCardContainer>
      <ListingImageContainer>
        <img src={imageUrl} alt={'storage'} />
      </ListingImageContainer>
      <ListingCardContent>
        <h3>{headerText}</h3>
        <LearningDetailsItemWrapper>
          <ListingDetailsItem>
            <ClockIcon />
            &nbsp;{timeLapsed}
          </ListingDetailsItem>
          <ListingDetailsItem>
            <TagIcon />
            &nbsp;{tagType}
          </ListingDetailsItem>
          <ListingDetailsItem>
            <AvatarIcon />
            &nbsp;{user}
          </ListingDetailsItem>
        </LearningDetailsItemWrapper>
      </ListingCardContent>
      <ListingCardButton color={Colors.white} background={Colors.blue}>
        read more
      </ListingCardButton>
    </LearnCardContainer>
  );
};

export default LearningCard;
