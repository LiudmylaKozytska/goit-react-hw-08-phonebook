import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const AuthLink = styled(NavLink)`
  padding: 4px 28px;

  color: white;
  background-color: #ee4f3c;

  border-radius: 10px;

  &:hover {
    box-shadow: 3px 5px 9px rgba(204, 204, 204, 0.7);
  }
`;
