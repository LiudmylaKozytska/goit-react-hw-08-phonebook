import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #ee4f3c;
  box-shadow: 0px 30px 70px rgba(204, 204, 204, 0.5);
  border-radius: 20px;
  width: 600px;

  padding: 85px 170px 85px 170px;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Input = styled.input`
  padding: 16px 5px 16px 40px;
  margin-right: auto;

  width: 300px;

  background-color: #ffffff;

  border: none;
  border-radius: 10px;

  color: #5d5d61;
  font-weight: 300;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.05em;
`;
export const Button = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;

  color: #ee4f3c;
  background-color: #ffffff;
  width: 335px;

  border: none;
  border-radius: 10px;
  cursor: pointer;

  padding: 16px 40px;

  &:hover {
    box-shadow: 3px 5px 9px rgba(204, 204, 204, 0.7);
  }

  &:focus-visible {
    outline: none;
  }
`;

export const StyledComponent = styled.div`
  position: absolute;
  left: -12px;
  bottom: -12px;
`;

export const Ellipse = styled.div`
  width: 6px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 50%;
  margin: 22px;
`;
export const EllipseGroup = styled.div`
  position: absolute;
  bottom: 0;
  left: 28px;
`;
export const EllipseGroupSecond = styled.div`
  position: absolute;
  bottom: 0;
  left: 56px;
`;
export const EllipseGroupThird = styled.div`
  position: absolute;
  bottom: 0;
  left: 84px;
`;

export const StyledLines = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const FirstLine = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 400px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px 45px 100px 100px;
`;
export const SecondLine = styled.div`
  position: absolute;
  top: 0;
  right: 93px;
  width: 80px;
  height: 293px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px 0px 100px 100px;
`;
export const ThirdLine = styled.div`
  position: absolute;
  top: 0;
  right: 186px;
  width: 80px;
  height: 225px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px 0px 100px 100px;
`;
export const FourLine = styled.div`
  position: absolute;
  top: 0;
  right: 279px;
  width: 80px;
  height: 174px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px 0px 100px 100px;
`;
