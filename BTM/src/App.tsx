

import './App.css'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import Footer from './Footer'
function App() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
      <ContactForm />
      <ContactInfo />
    </div>
    <Footer />
    </div>
  )
}

export default App
