import React from 'react';
import Logo from '../../../assets/images/cityscan_logo.png';
import {
  StyledHeader,
  StyledLogo,
  StyledHeading,
  StyledDate,
} from './header.styled';
import useDate from '../../../hooks/useCurrentDate';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { day, month, year } = useDate();
  return (
    <StyledHeader>
      <StyledLogo src={Logo} alt="CityScan logo" />
      <StyledHeading type="h2">CityScan</StyledHeading>
      <StyledDate>
        {year} / {month} / {day}
      </StyledDate>
    </StyledHeader>
  );
};

export default Header;
