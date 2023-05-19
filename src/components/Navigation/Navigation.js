import { useAuth } from 'hooks';
import { NavigationPage, Logo, NavigationLink } from './NavigationStyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationPage>
      <Logo>Phonebook</Logo>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </NavigationPage>
  );
};
