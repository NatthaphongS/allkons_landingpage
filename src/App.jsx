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
  padding: 0.5rem 1rem;
`;

const LogoText = styled.h1`
  font-size: 2.5rem;
  color: white;
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
