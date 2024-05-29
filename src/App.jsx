import About from './components/About';
import Careers from './components/Careers';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="">
    <section id="hero">

      <div
        className="min-h-96 px-8"
        style={{
          backgroundImage: 'url(./images/desktop/image-hero.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          // backgroundPosition: 'center',
        }}
      >
        <Navbar />
        <Hero />
      </div>
    </section>
    <div className="main-content">
    <section id="about">
      <About />
    </section>
    <section id="careers">
      <Careers />
    </section>
      <Footer />
      </div>
    </div>
  );
}

export default App;
