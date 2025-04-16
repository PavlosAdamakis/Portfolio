// src/App.jsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects'; // Import Projects
import './App.css';
import CV from './components/CV'; // Import CV
import Contact from './components/Contact'; // Import Contact

function App() {
  return (
    <div>
      <Navbar />
      <main>
         <About />
         <Projects />
         <CV />
         <Contact /> {/* Add the Contact section */}
      </main>
      <Footer />
    </div>
  );
}
export default App;