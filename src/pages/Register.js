import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { LoginSection } from './Login/LoginStyled';

const Register = () => {
  return (
    <LoginSection>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </LoginSection>
  );
};

export default Register;
