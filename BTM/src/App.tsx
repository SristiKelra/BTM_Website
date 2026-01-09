import Service from './Service';
import CaseStudy from './CaseStudy';
import Logo from './Logo';

function App() {
  return (
    <div style={{ backgroundColor: '#000000' }}>
      {/* Service section comes first */}
      <Service />
      <Logo />
      {/* Case Study section follows immediately below */}
      <CaseStudy />
    </div>
  );
}

export default App;