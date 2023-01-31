
import ExpertSection from './components/ExpertSection/ExpertSection';
import HeroSection from './components/HeroSection/HeroSection';
import HowDoSection from './components/HowDoSection/HowDoSection';
import MoreQuestionsSection from './components/MoreQuestionsSection/MoreQuestionsSection';
import NavBarMain from './components/NavBar/NavBarMain';
import PlanAndPackages from './components/PlanAndPackages/PlanAndPackages';
import Footer from './components/Footer/Footer';
import TopDeclaimer from './components/TopDeclaimar/TopDeclaimer';
function App() {
  return (
    <>
      <TopDeclaimer/>
      <NavBarMain />
      <HeroSection />
      <ExpertSection />
      <HowDoSection />
      <MoreQuestionsSection />
      <PlanAndPackages />
      <Footer />
    </>
  );
}

export default App;
