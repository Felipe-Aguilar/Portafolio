import React from 'react';
import styled from 'styled-components';

import FotoPerfil from '../assets/FotoPerfil.jpg';

const AcercaDe = () => {
    return ( 
        <AcercaDeContenedor className='container'>
            <section id='AcercaDe'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <img src={FotoPerfil} alt="Desarrollador Web | Felipe Aguilar" />
                    </div>
                    <div className='col-12 col-md-6'>
                        <h2>¡Hola!</h2>
                        <p>
                            Mi nombre es Felipe de Jesús Aguilar García, Ingeniero en Informática egresado de la Universidad Politécnica del Valle de México. 
                        </p>
                        <p>
                            Con más de 2 años de experiencia en Ecommerce y Desarrollo Front - End, trabajando con diferentes CMS y desarrollando tareas automatizadas de Tiendas Online, haciendo uso de herramientas Front - End, Back - End y Bases de Datos.
                        </p>
                    </div>
                </div>
            </section>
        </AcercaDeContenedor>
    );
}

const AcercaDeContenedor = styled.div`
    padding: 80px 0;
    @media screen and (max-width: 575px){
        padding: 80px 10px;
    }
    
    h2,p{
        color:#2a2a2a; 
    }

    img{
        width: 50%;
        display: block;
        margin:auto;
        border-radius: 100%;
        box-shadow:
        0px 0px 1.6px rgba(0, 0, 0, 0.017),
        0px 0px 3.6px rgba(0, 0, 0, 0.024),
        0px 0px 6.3px rgba(0, 0, 0, 0.03),
        0px 0px 10px rgba(0, 0, 0, 0.035),
        0px 0px 15.5px rgba(0, 0, 0, 0.04),
        0px 0px 24.1px rgba(0, 0, 0, 0.046),
        0px 0px 40px rgba(0, 0, 0, 0.053),
        0px 0px 80px rgba(0, 0, 0, 0.07)
        ;

    }
`;

export default AcercaDe;