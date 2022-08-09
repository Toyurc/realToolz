import React from 'react';
import { MENU_ITEMS } from 'utils/constant';

import {
  StyledMenuItem,
  StyledMenuItems,
  StyledMenuText,
  StyledSignOutLink,
  StyledSignOutWrapper,
  StyledWrapper,
  StyleSignOutIcon,
} from './SideBar.styled';

const SideBar: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledMenuItems>
        {MENU_ITEMS.map(({ id, Icon, title }) => (
          <StyledMenuItem key={id}>
            <Icon color="#79d49c" size={20} />
            <StyledMenuText>{title}</StyledMenuText>
          </StyledMenuItem>
        ))}
      </StyledMenuItems>

      <StyledSignOutWrapper>
        <StyleSignOutIcon size={20} />
        <StyledSignOutLink>Sign Out</StyledSignOutLink>
      </StyledSignOutWrapper>
    </StyledWrapper>
  );
};

export default SideBar;
