import styled from '@emotion/styled';

export const Header = styled.h1`
  font-family: Pacifico;

  display: flex;
  font-size: 100px;
  line-height: 115px;
  margin-right: 24px;

  position: relative;
  z-index: 9;
`;

export const HomeSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeText = styled.p`
  font-family: Georgia;
  font-size: 32px;

  position: relative;
  z-index: 9;

  padding: 16px;
`;

export const ImagePosition = styled.div`
  position: relative;
  left: 0;
`;

export const EllipseBig = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 564px;
  height: 564px;
`;

export const EllipseSmall = styled.img`
  position: absolute;
  top: 132px;
  left: 132px;
  width: 300px;
  height: 300px;
`;

export const ImageGirl = styled.img`
  position: absolute;
  top: 100px;
  left: 100px;
  width: 340px;
  height: 480px;
`;
