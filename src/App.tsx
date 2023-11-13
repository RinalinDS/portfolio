import './App.scss';
import { Header } from './components/header/Header';
import { Bio } from './components/main/Bio';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Education } from './components/contacts/Education';
import { Footer } from './components/footer/Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
};
