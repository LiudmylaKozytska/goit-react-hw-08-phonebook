import {
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
} from 'components/ModalStyle/ModalStyledComponents.js';

export const ModalStyle = () => {
  return (
    <>
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
    </>
  );
};
