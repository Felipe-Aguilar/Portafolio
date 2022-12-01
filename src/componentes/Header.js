import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import ImagenFondo from '../assets/FondoOp3.jpg';
import ImagenFondo2 from '../assets/FondoOp1.jpg';
import ImagenFondo3 from '../assets/FondoOp2.jpg';
import FotoPerfil from '../assets/FotoPerfil.jpg';

const Header = () => {
    return ( 
        <HeaderContenedor className='container-fluid vh-100'>
            <div className='row h-100 justify-content-center align-items-center'>
                <div className='w-auto text-center'>
                    <motion.img 
                        src={FotoPerfil} 
                        alt="Desarrollador Web | Felipe Aguilar" 

                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1}}
                        whileHover={{cursor: 'grab'}}
                        whileTap={{cursor: 'grabbing'}}
                        drag={'x'}
                        dragConstraints={{
                            left: -10,
                            right: 10
                        }}
                    />
                    <h1>Felipe de Jesús Aguilar García</h1>
                    <h3>Desarrollador Web</h3>

                    <motion.a 
                        href="https://www.linkedin.com/in/felipe-aguilar-333996211/" 
                        target={'_blank'}
                        className="Icon"
                        
                        initial={{opacity:0, scale: 0}}
                        animate={{opacity:1}}
                        transition={{delay:1.5}}
                    >
                        <i className="bi bi-linkedin"></i>
                    </motion.a>

                    <motion.a 
                        href="https://github.com/Felipe-Aguilar/" 
                        target={'_blank'}
                        className="Icon"

                        initial={{opacity:0, scale: 0}}
                        animate={{opacity:1}}
                        transition={{delay:1.8}}
                    >
                        <i className="bi bi-github"></i>
                    </motion.a>
                    
                    <motion.a 
                        href="#"
                        className='btn'
                        initial={{opacity:0, scale: 0}}
                        animate={{opacity:1, scale: [1, 1.2,1]}}
                        transition={{delay:2}}
                    >
                        Ver CV
                    </motion.a>
                </div>
            </div>
        </HeaderContenedor>
    );
}

const HeaderContenedor = styled.div`
    /* background: url(${ImagenFondo}); */
    background: url(${ImagenFondo2});
    /* background: url(${ImagenFondo3}); */
    background-size: cover;
    background-repeat: no-repeat;

    img{
        width: 180px;
        border-radius: 100px;
        display: block;
        margin:auto;
        margin-bottom: 30px;

        @media screen and (max-width: 575px){
            width: 150px;
        }
    }
    h1{
        text-transform: uppercase;
        text-align: center;
        font-weight: 200!important;
        margin-bottom: 20px;
        
        @media screen and (max-width: 575px){
            font-size: 20px;
            margin-bottom: 10px;
        }
    }
    h3{
        text-transform: uppercase;
        text-align: center;
        font-weight: 600;
        margin-bottom: 20px;

        @media screen and (max-width: 575px){
            font-size: 17px;
            margin-bottom: 10px;
        }
    }
    .Icon{
        font-size: 30px;
        margin: 15px;
        
        i{
            transition: all .3s ease;
            &:hover{
                color: #287731;
                color: #2d4034;
                color: #374d3f;
                color: #59634f;
            }
        }

        @media screen and (max-width: 575px){
            margin: 10px;
        }
    }
    .btn{
        outline: none;
        border-radius: 6px;
        border: 2px solid #287731;
        border: 2px solid #2d4034;
        border: 2px solid #374d3f;
        border: 2px solid #59634f;
        display: block;
        color: #fff;
        padding: 8px 25px;
        width: 120px;
        margin:auto;
        margin-top: 30px;
        transition: all .3s ease-out;

        &:hover{
            background: #287731;
            background: #2d4034;
            background: #374d3f;
            background: #59634f;
        }
    }
`;

export default Header;