import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginSection } from './LoginStyled';

const Login = () => {
  return (
    <LoginSection>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </LoginSection>
  );
};

export default Login;
