import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserContainer, UserText, UserButton } from './UserMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserContainer>
      <UserText>Welcome, {user.name}</UserText>
      <UserButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserButton>
    </UserContainer>
  );
};
