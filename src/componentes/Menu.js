import React from 'react';
import styled from 'styled-components';

const Menu = () => {
    return ( 
        <MenuContenedor className='container-fluid'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <a href="#AcercaDe">Acerca de</a>
                    <a href="#SoftSkills">Soft Skills</a>
                    <a href="#">Portafolio</a>
                    <a href="#">Contacto</a>
                </div>
            </div>
        </MenuContenedor>
    );
}

const MenuContenedor = styled.div`
    padding: 20px;
    background-color: rgba(234, 237, 240, 0.8);
    backdrop-filter: blur(16px);
    position: sticky;
    top: 0px;
    z-index: 1;

    a{
        padding: 17px 20px;
        color:#2a2a2a;
        text-decoration: none;
        border: 2px solid transparent;
        transition: all .3s ease;

        &:hover{
            color: #287731;
            color: #2d4034;
            color: #374d3f;
            color: #59634f;
            border-bottom: 2px solid #59634f;
        }
        
        @media screen and (max-width: 575px){
            font-size: 13px;
            padding: 17px 10px;
        }
    }
`;

export default Menu;