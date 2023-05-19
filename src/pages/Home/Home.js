import { Header, HomeSection, HomeText } from './HomeStyles';
import { HomeImages } from './HomeImages';

const Home = () => {
  return (
    <HomeSection>
      <HomeImages />
      <div>
        <Header>Phonebook</Header>
        <HomeText>Save your contacts in one place</HomeText>
      </div>
    </HomeSection>
  );
};

export default Home;
