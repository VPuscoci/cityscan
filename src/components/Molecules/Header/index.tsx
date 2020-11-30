import React from 'react';
import Logo from '../../../assets/images/cityscan_logo.png';
import { StyledHeader, StyledLogo, StyledHeading } from './header.styled';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} alt="CityScan logo" />
      <StyledHeading type="h2">CityScan</StyledHeading>
    </StyledHeader>
  );
};

export default Header;
