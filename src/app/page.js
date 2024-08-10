import Navbar from './components/Navbar';
import Section from './components/Section';
import AnimationWrapper from './components/AnimationWraper';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';


export default function HomePage() {
  return (
    <>
      
      <AnimationWrapper>
        

         <Home/>
         <About/>
         <Skills/>    
          <Projects/>
          <Experience/> 
   
          <Contact/>
  
        
      </AnimationWrapper>
    </>
  );
}
