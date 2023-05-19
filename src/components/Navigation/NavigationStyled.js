import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationPage = styled.div`
  display: flex;
  gap: 32px;

  font-size: 28px;
`;

export const Logo = styled.p`
  font-family: Pacifico;
  font-size: 36px;
  color: #ee4f3c;
`;

export const NavigationLink = styled(NavLink)`
  color: #2a363b;
  &.active {
    color: #ee4f3c;
  }
`;
