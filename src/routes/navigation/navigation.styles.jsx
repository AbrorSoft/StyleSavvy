import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ReactComponent as LadyLogo} from '../../assets/Logo.svg'


export const NavigationComponent = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 999;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  filter: invert(46%) sepia(5%) saturate(194%) hue-rotate(201deg) brightness(94%) contrast(89%);
  width: 170px;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

export const Logo = styled(LadyLogo)`
  width: 100px;
  height: 70px;

  @media (max-width: 768px) {
    width: 70px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

