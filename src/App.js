import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from './components/Skills';
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import BackToTopButton from "./components/BackToTopButton";
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <section id="Hero">
          <Hero />
        </section>

        <section id="AboutMe">
          <AboutMe />
        </section>

        <section id="Education">
          <Education />
        </section>

        <section id="Experiences">
          <Experiences />
        </section>

        <section id="Skills">
          <Skills />
        </section>

      </BrowserRouter>
      <BackToTopButton />
    </div>
  );
}

export default App;
