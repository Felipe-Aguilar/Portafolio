import React from 'react';
import styled from 'styled-components';

import Goza from '../assets/Goza.jpg';
import Yalogics from '../assets/Yalogics.png';
import Dkassa from '../assets/Dkassa.png';
import South from '../assets/SouthDental.png';
import Cigars from '../assets/Cigars.png';
import Babel from '../assets/Babel.png';

import html from '../assets/html.svg';
import css from '../assets/css.svg';
import php from '../assets/php.svg';
import sass from '../assets/sass.svg';

const PortafolioTrabajos = () => {
    return ( 
        <>
            <PortafolioTrabajosContenedor className='col-12 col-md-10'>
                <div className='row contenedor-trabajo'>
                    <div className='col-12 col-md-6'>
                        {/* <img src={Goza} alt="Desarrollador Web | Felipe Aguilar Portafolio" className='img-fluid'/> */}
                    </div>
                    <div className='col-12 col-md-6'>
                        <h2>Goza Mx</h2>
                        <p>
                            Ecommerce de Ropa para Dama marca totalmente Mexicana, sitio seguro con pasarela de pagos con Mercado Pago y PayPal, envíos con Skydropx. 
                        </p>
                        <p>
                            Conexión entre Ecommerce y Punto de Venta para lectura y edición de inventarios en tiempo real.
                        </p>
                        <a href="https://gozamx.com/" target={"_blank"}>
                            Visitar Sitio <i className="bi bi-link-45deg"></i>
                        </a>
                        
                        <div className='tecnologias'>
                            <h3>Tecnologías</h3>
                            <a href="https://wordpress.com/es/" target={"_blank"}>
                                <i className="bi bi-wordpress"></i> Wordpress
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target={"_blank"}>
                                <img src={html} alt="Desarrollador web | Felipe Aguilar" /> HTML
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target={"_blank"}>
                                <img src={css} alt="Desarrollador web | Felipe Aguilar" /> CSS
                            </a>
                            <a href="https://www.php.net/manual/es/intro-whatis.php" target={"_blank"}>
                                <img src={php} alt="Desarrollador web | Felipe Aguilar" /> PHP
                            </a>
                            <a href="https://www.mysql.com/" target={"_blank"}>
                                <i className="bi bi-database-fill"></i> MySQL
                            </a>
                            <a href="https://www.microsoft.com/es-mx/sql-server/sql-server-downloads" target={"_blank"}>
                                <i className="bi bi-database-fill"></i> SQL Server
                            </a>
                        </div>

                    </div>
                </div>
            </PortafolioTrabajosContenedor>

            <PortafolioTrabajosContenedor className='col-12 col-md-10 mt-5'>
                <div className='row contenedor-trabajo'>
                    <div className='col-12 col-md-6'>
                        <img src={Yalogics} alt="Desarrollador Web | Felipe Aguilar Portafolio" className='img-fluid'/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h2>Yalogics</h2>
                        <p>
                            Empresa dedicada a la creación de Ecommerce en CMS y desarrollos web en general.
                        </p>
                        <p>
                            Desarrollo de sitio web informativo con portafolio y medio de contacto dentro del sitio.
                        </p>
                        <a href="https://yalogics.com/" target={"_blank"}>
                            Visitar Sitio <i className="bi bi-link-45deg"></i>
                        </a>
                        
                        <div className='tecnologias'>
                            <h3>Tecnologías</h3>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target={"_blank"}>
                                <img src={html} alt="Desarrollador web | Felipe Aguilar" /> HTML
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target={"_blank"}>
                                <img src={css} alt="Desarrollador web | Felipe Aguilar" /> CSS
                            </a>
                            <a href="https://sass-lang.com/" target={"_blank"}>
                                <img src={sass} alt="Desarrollador web | Felipe Aguilar" /> SASS
                            </a>
                            <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" target={"_blank"}>
                                <i className="bi bi-bootstrap-fill"></i> Bootstrap
                            </a>
                            <a href="https://www.php.net/manual/es/intro-whatis.php" target={"_blank"}>
                                <img src={php} alt="Desarrollador web | Felipe Aguilar" /> PHP
                            </a>
                        </div>

                    </div>
                </div>
            </PortafolioTrabajosContenedor>

            <PortafolioTrabajosContenedor className='col-12 col-md-10 mt-5'>
                <div className='row contenedor-trabajo'>
                    <div className='col-12 col-md-6'>
                        <img src={Dkassa} alt="Desarrollador Web | Felipe Aguilar Portafolio" className='img-fluid'/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h2>Dkassa</h2>
                        <p>
                            Ecommerce de Venta de Muebles de alta calidad en Nuevo León Monterrey.
                        </p>
                        <p>
                            Pagos seguros dentro del sitio con Paypal y OpenPay. Gestión de envíos a todo México.
                        </p>
                        <a href="https://dkassa.com.mx/" target={"_blank"}>
                            Visitar Sitio <i className="bi bi-link-45deg"></i>
                        </a>
                        
                        <div className='tecnologias'>
                            <h3>Tecnologías</h3>

                            <a href="https://wordpress.com/es/" target={"_blank"}>
                                <i className="bi bi-wordpress"></i> Wordpress
                            </a>

                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target={"_blank"}>
                                <img src={html} alt="Desarrollador web | Felipe Aguilar" /> HTML
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target={"_blank"}>
                                <img src={css} alt="Desarrollador web | Felipe Aguilar" /> CSS
                            </a>
                            <a href="https://devdocs.io/javascript/" target={"_blank"}>
                                JavaScript
                            </a>
                        </div>

                    </div>
                </div>
            </PortafolioTrabajosContenedor>

            <PortafolioTrabajosContenedor className='col-12 col-md-10 mt-5'>
                <div className='row contenedor-trabajo'>
                    <div className='col-12 col-md-6'>
                        <img src={South} alt="Desarrollador Web | Felipe Aguilar Portafolio" className='img-fluid'/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h2>South Dental</h2>
                        <p>
                            Consultorio Dental
                        </p>
                        <p>
                            Sitio Web Informativo de South Dental Center México.
                        </p>
                        <a href="https://southdentalmexico.com/" target={"_blank"}>
                            Visitar Sitio <i className="bi bi-link-45deg"></i>
                        </a>
                        
                        <div className='tecnologias'>
                            <h3>Tecnologías</h3>

                            <a href="https://wordpress.com/es/" target={"_blank"}>
                                <i className="bi bi-wordpress"></i> Wordpress
                            </a>
                        </div>

                    </div>
                </div>
            </PortafolioTrabajosContenedor>

            <PortafolioTrabajosContenedor className='col-12 col-md-10 mt-5'>
                <div className='row contenedor-trabajo'>
                    <div className='col-12 col-md-6'>
                        <img src={Cigars} alt="Desarrollador Web | Felipe Aguilar Portafolio" className='img-fluid'/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h2>Cigars & Luxury</h2>
                        <p>
                            Ecommerce de habanos en México.
                        </p>
                        <p>
                            Sitio con restricción de edad a +18 con pasarela de pagos PayPal. Envíos automatizados. 
                        </p>
                        <a href="https://cigarsandluxury.com/" target={"_blank"}>
                            Visitar Sitio <i className="bi bi-link-45deg"></i>
                        </a>
                        
                        <div className='tecnologias'>
                            <h3>Tecnologías</h3>

                            <a href="https://wordpress.com/es/" target={"_blank"}>
                                <i className="bi bi-wordpress"></i> Wordpress
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target={"_blank"}>
                                <img src={html} alt="Desarrollador web | Felipe Aguilar" /> HTML
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target={"_blank"}>
                                <img src={css} alt="Desarrollador web | Felipe Aguilar" /> CSS
                            </a>
                            <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" target={"_blank"}>
                                <i className="bi bi-bootstrap-fill"></i> Bootstrap
                            </a>
                            <a href="https://devdocs.io/javascript/" target={"_blank"}>
                                JavaScript
                            </a>
                        </div>

                    </div>
                </div>
            </PortafolioTrabajosContenedor>

            <PortafolioTrabajosContenedor className='col-12 col-md-10 mt-5'>
                <div className='row contenedor-trabajo'>
                    <div className='col-12 col-md-6'>
                        <img src={Babel} alt="Desarrollador Web | Felipe Aguilar Portafolio" className='img-fluid'/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h2>Babel Traductores</h2>
                        <p>
                            Servicios de Traducción en Monterrey Nuevo León. 
                        </p>
                        <p>
                            Sitio informativo dinámico y diferente a solicitud del cliente, para brindar servicios de traducción de documentos y eventos.
                        </p>
                        <a href="https://babeltraductores.com.mx/" target={"_blank"}>
                            Visitar Sitio <i className="bi bi-link-45deg"></i>
                        </a>
                        
                        <div className='tecnologias'>
                            <h3>Tecnologías</h3>

                            <a href="https://wordpress.com/es/" target={"_blank"}>
                                <i className="bi bi-wordpress"></i> Wordpress
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target={"_blank"}>
                                <img src={html} alt="Desarrollador web | Felipe Aguilar" /> HTML
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target={"_blank"}>
                                <img src={css} alt="Desarrollador web | Felipe Aguilar" /> CSS
                            </a>
                        </div>

                    </div>
                </div>
            </PortafolioTrabajosContenedor>
        </>
    );
}

const PortafolioTrabajosContenedor = styled.div`
    background: linear-gradient(120.29deg,hsla(0,0%,100%,.4) 10.65%,hsla(0,0%,100%,.1) 78.78%);
    backdrop-filter: blur(40px);

    border-radius: 10px;
    padding: 50px;

    @media screen and (max-width: 575px){
        padding: 20px;
    }

    .contenedor-trabajo{
        img{
            border-radius: 10px;
        }
        h2,h3{
            font-family: 'Alexandria', sans-serif;
            text-transform: uppercase;
            color: #d6dfce;
        }
        a{
            text-decoration: none;
            text-transform: none;
            font-size: 17px;
            border-radius: 7px;
            padding: 10px 15px;
            background: #fff;
            color: #2a2a2a;
            
            i{
                color: #2a2a2a;
            }

            &:hover{
                color: #2a2a2a; 
            }
        }

        .tecnologias{
            margin-top: 100px;

            h3{
                font-size: 20px;
            }
            a{
                font-size: 15px;
                margin-right: 10px;
                margin-bottom: 5px;
                display: inline-block;
            }
        }
    }
`;

export default PortafolioTrabajos;