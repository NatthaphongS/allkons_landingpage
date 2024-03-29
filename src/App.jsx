import styled from 'styled-components';
import MainContent from './MainContent';
import PageFooter from './PageFooter';

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  @media only screen and (max-width: 991px) {
    overflow-y: scroll;
  }
`;

const HeaderContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  @media only screen and (max-width: 991px) {
    padding: 0.5rem 1rem 2rem;
  }
`;

const LogoText = styled.h1`
  font-size: 2.5rem;
  color: white;
  text-shadow: 0 5px 5px #000;
  @media only screen and (max-width: 991px) {
    font-size: 2.3rem;
  }
  @media only screen and (max-width: 475px) {
    font-size: 2rem;
  }
`;

function App() {
  return (
    <PageContainer>
      <HeaderContainer>
        <LogoText>ALLKONS</LogoText>
      </HeaderContainer>
      <MainContent />
      <PageFooter />
    </PageContainer>
  );
}

export default App;
