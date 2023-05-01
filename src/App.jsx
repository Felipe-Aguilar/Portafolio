import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/header';
import Menu from './components/Menu';
import AcercaDe from './components/AcercaDe';
import Skills from './components/Skills';
import VistaPortafolio from './components/VistaPortafolio';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

const App = () => {
  return ( 
    <>
      <Header />
      <Menu />
      <AcercaDe />
      <Skills />
      <VistaPortafolio />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;