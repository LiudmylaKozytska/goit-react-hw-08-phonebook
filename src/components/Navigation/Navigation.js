import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavigationPage, Logo } from './NavigationStyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationPage>
      <Logo>Phonebook</Logo>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </NavigationPage>
  );
};
