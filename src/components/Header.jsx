import { motion } from 'framer-motion';

import FotoPerfil from '../assets/FotoPerfil.jpg';

const Header = () => {
    return ( 
        <div className="container-fluid vh-100 header">
            <div className="row h-100 justify-content-center align-items-center">
                <div>
                    <motion.img 
                        src={FotoPerfil} 
                        initial={{opacity: 0}}

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
                    <h3>Desarrollador Front - End</h3>

                    <div className='buttons'>
                        <a href="https://www.linkedin.com/in/felipe-aguilar-333996211/" target='_blank'>
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://github.com/Felipe-Aguilar" target='_blank'>
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                    <div className='cv'>
                        <a href="https://drive.google.com/file/d/1NDr5TmcLlObmHMoANkP6D_0c4kFOgVke/view?usp=sharing" target='_blank'>
                            Ver CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;