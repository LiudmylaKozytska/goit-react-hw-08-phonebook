import { AuthNavContainer, AuthLink } from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Log In</AuthLink>
    </AuthNavContainer>
  );
};
