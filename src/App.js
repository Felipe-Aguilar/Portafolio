import React from 'react';
import Header from './componentes/Header';
import Menu from './componentes/Menu';
import AcercaDe from './componentes/AcerdaDe';
import SoftSkills from './componentes/SoftSkills';
import Portafolio from './componentes/Portafolio';

const App = () => {
  return ( 
    <>
      <Header />
      <Menu />
      <AcercaDe />
      <SoftSkills />
      <Portafolio />
    </>
  );
}

export default App;