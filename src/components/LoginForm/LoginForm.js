import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import {
  Form,
  Input,
  Button,
  StyledComponent,
  Ellipse,
  EllipseGroup,
  EllipseGroupSecond,
  EllipseGroupThird,
  StyledLines,
  FirstLine,
  SecondLine,
  ThirdLine,
  FourLine,
} from './LoginFormStyled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Input type="email" name="email" placeholder="e-mail" />
      <Input type="password" name="password" placeholder="password" />
      <Button type="submit">Log In</Button>
      <StyledComponent>
        <Ellipse /> <Ellipse /> <Ellipse /> <Ellipse />
        <EllipseGroup>
          <Ellipse /> <Ellipse />
          <Ellipse /> <Ellipse />
        </EllipseGroup>
        <EllipseGroupSecond>
          <Ellipse /> <Ellipse />
          <Ellipse /> <Ellipse />
        </EllipseGroupSecond>
        <EllipseGroupThird>
          <Ellipse /> <Ellipse />
          <Ellipse /> <Ellipse />
        </EllipseGroupThird>
      </StyledComponent>
      <StyledLines>
        <FirstLine></FirstLine>
        <SecondLine></SecondLine>
        <ThirdLine></ThirdLine>
        <FourLine></FourLine>
      </StyledLines>
    </Form>
  );
};
