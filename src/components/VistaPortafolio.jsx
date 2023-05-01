import { NavLink, Routes, Route } from 'react-router-dom';

import Portafolio from './Portafolio';
import Proyectos from './Proyectos';
import { useState } from 'react';

const VistaPortafolio = () => {

    const [proyectos, setProyectos]= useState(false);

    return ( 
        <div className="container-fluid vista-portafolio">
            <section id="Portafolio">
                <div className="row justify-content-center encabezado">
                    <div>
                        <NavLink to={'/'} className={proyectos ? 'active' : ''}>
                            Portafolio
                        </NavLink>

                        <NavLink to={'/proyectos'}>
                            Proyectos
                        </NavLink>
                    </div>
                </div>

                <div className='d-flex justify-content-center'>
                    <Routes>
                        <Route path='*' element={<Portafolio />}/>
                        <Route path='/' element={<Portafolio />}/>
                        <Route path='/proyectos' element={<Proyectos />}/>
                    </Routes>
                </div>

            </section>
        </div>
    );
}

export default VistaPortafolio;