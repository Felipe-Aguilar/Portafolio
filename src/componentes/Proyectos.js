import React from 'react';
import styled from 'styled-components';

const Proyectos = () => {
    return ( 
        <ProyectosContenedor>
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
                            {/* <img src={html} alt="Desarrollador web | Felipe Aguilar" /> HTML */}
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target={"_blank"}>
                            {/* <img src={css} alt="Desarrollador web | Felipe Aguilar" /> CSS */}
                        </a>
                        <a href="https://www.php.net/manual/es/intro-whatis.php" target={"_blank"}>
                            {/* <img src={php} alt="Desarrollador web | Felipe Aguilar" /> PHP */}
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
        </ProyectosContenedor>
    );
}

const ProyectosContenedor = styled.div`
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

export default Proyectos;