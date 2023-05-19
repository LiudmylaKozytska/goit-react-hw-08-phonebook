import { AuthNavContainer, AuthLink } from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <AuthLink to="/register">Sign In</AuthLink>
      <AuthLink to="/login">Log In</AuthLink>
    </AuthNavContainer>
  );
};
