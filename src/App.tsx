import Header from './components/Header';
import Hero from './components/Hero';
//import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappLive from './components/Whatsapp';
import ConsultationButton from './components/ConsultationButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      {/* <Portfolio /> */}
      <About />
      <Services />
      <Contact />
      <Footer />
       <ConsultationButton />
      <WhatsappLive />  
    </div>
  );
}

export default App;