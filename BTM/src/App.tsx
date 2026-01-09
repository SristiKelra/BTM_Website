import Service from './Service';
import Logo from './Logo';
import About from './About';
import CaseStudy from './CaseStudy';

function App() {
  return (
    <div className="App">
      {/* 1. Experts Cards */}
      <Service />
      
      {/* 2. Full-width Logo Divider */}
      <Logo />
      
      {/* 3. Mission, Stats, and Clients */}
      <About />
      
      {/* 4. Detailed Project Highlight */}
      <CaseStudy />
    </div>
  );
}

export default App;