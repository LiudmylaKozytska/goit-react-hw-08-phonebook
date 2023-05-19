import {
  ImagePosition,
  EllipseBig,
  EllipseSmall,
  ImageGirl,
} from './HomeStyles';
import girl from 'images/girl.png';
import ellipseBig from 'images/ellipseBig.png';
import ellipseSmall from 'images/ellipseSmall.png';

export const HomeImages = () => {
  return (
    <ImagePosition>
      <EllipseBig src={ellipseBig} alt="ellipse" />
      <EllipseSmall src={ellipseSmall} alt="ellipse" />
      <ImageGirl src={girl} alt="Girl with phone" />
    </ImagePosition>
  );
};
