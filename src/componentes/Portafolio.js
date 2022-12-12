import React from 'react';
import styled from 'styled-components';
import { NavLink, Routes, Route } from 'react-router-dom';

import PortafolioTrabajos from './PortafolioTrabajos';
import Proyectos from './Proyectos';

const Portafolio = () => {
    return ( 
        <PortafolioContenedor className='container-fluid p-5'>
            <div className='row justify-content-center links'>
                <div className='w-auto'>
                    <NavLink to="/portafolio-trabajos">
                        Portafolio
                    </NavLink>
                </div>
                <div className='w-auto'>
                    <NavLink to="/proyectos">
                        Proyectos
                    </NavLink>
                </div>
            </div>

            <div className='row justify-content-center mt-5'>
                <Routes>
                    <Route path='/portafolio-trabajos' element={<PortafolioTrabajos/>}/>
                    <Route path='/proyectos' element={<Proyectos/>}/>
                </Routes>
            </div>
        </PortafolioContenedor>
    );
}

const PortafolioContenedor = styled.div`
    background: radial-gradient(circle, transparent 20%, #282828 20%, #282828 80%, transparent 80%, transparent) 0% 0% / 64px 64px, radial-gradient(circle, transparent 20%, #282828 20%, #282828 80%, transparent 80%, transparent) 32px 32px / 64px 64px, linear-gradient(#59634f 2px, transparent 2px) 0px -1px / 32px 32px, linear-gradient(90deg, #59634f 2px, #282828 2px) -1px 0px / 32px 32px #282828;
    background-color: #282828;

    .links{
        gap: 35px;

        @media screen and (max-width: 575px){
            gap: 30px;
        }

        a{
            font-family: 'Alexandria', sans-serif;
            font-size: 25px;
            font-weight: 600;
            text-transform: uppercase;
            color: #fff;
            text-decoration: none;
            border-bottom: 3px solid transparent;
            transition: all .3s ease;

            @media screen and (max-width: 575px){
                font-size: 20px;
            }

            &:hover{
                color: #d6dfce;
            }
            &.active{
                /* border-bottom: 3px solid #9eab91; */
                border-bottom: 3px solid #d6dfce;
                color: #d6dfce;
            }
        }
    }
`;

export default Portafolio;