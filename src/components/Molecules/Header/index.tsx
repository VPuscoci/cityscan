import React from 'react';
import Logo from '../../../assets/images/cityscan_logo.png';
import { useHistory } from 'react-router-dom';
import {
  StyledHeader,
  StyledLogo,
  StyledHeading,
  StyledBackIcon,
  StyledLink,
} from './header.styled';

const Header: React.FC = (props) => {
  let history = useHistory();
  console.log(history);

  return (
    <StyledHeader>
      {history.location.pathname !== '/' && (
        <button onClick={() => history.goBack()}>
          <StyledBackIcon></StyledBackIcon>
        </button>
      )}

      <StyledLink href="/">
        <StyledLogo src={Logo} alt="CityScan logo" />
        <StyledHeading type="h2">CityScan</StyledHeading>
      </StyledLink>
    </StyledHeader>
  );
};

export default Header;
