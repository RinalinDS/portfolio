import './App.scss';
import { Header } from './components/header/Header';
import { Bio } from './components/main/Bio';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Contacts } from './components/contacts/Contacts';
import { Footer } from './components/footer/Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};
