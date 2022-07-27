import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import Testimonial from './components/testimonial/testimonial';
import Contact from './components/contact/contact';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
