import { IconBrandPhp, IconBrandMysql, IconSql, IconBrandSass, IconBrandJavascript, IconBrandReact } from '@tabler/icons-react';

import RetoCiid from '../assets/RetoCiid.jpg';
import ErpAutos from '../assets/ErpAutos.jpg';
import TierraApp from '../assets/TierraApp.webp';
import ListaApp from '../assets/ListaApp.jpg';
import TareasApp from '../assets/TareasApp.webp';
import CarritoApp from '../assets/CarritoApp.jpg';

const Proyectos = () => {
    return ( 
        <div className='w-100'>
            <div className="row align-items-center contenedor">

                <div className="col-12 col-md-6">
                    <img src={RetoCiid} />
                </div>

                <div className="col-12 col-md-6">
                    <h2>Reto CIID</h2>
                    <p>
                        Conectarse a la API de microsoft azure, bing news y desarrollar el front responsivo en tres resoluciones(smartphone, tablet, desktop), usando react.js que muestre un listado de noticias del día actual con:
                    </p>
                    <ul>
                        <li>Fotografía de la noticia</li>
                        <li>Título</li>
                        <li>Dos líneas del contenido de la noticia</li>
                        <li>Fecha de la noticia</li>
                    </ul>
                    <p>
                        Y proporcionar los siguientes filtros: 
                    </p>
                    <ul>
                        <li>Listado de noticias con noticias de la semana más reciente, solo sobre el mundo de la economía digital</li>
                        <li>Listado de noticias con noticias de la semana más reciente, solo sobre entretenimiento</li>
                        <li>Listado de noticias con noticias de la semana más reciente, solo sobre  negocios</li>
                    </ul>
                    <p>
                        Uso de Hooks: useState, useContext
                    </p>

                    <a href="https://reto-ciid-felipe-aguilar-v2.netlify.app/" target="_blank">
                        Visitar Sitio
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>

                    <div className='tecnologias'>
                        <h3>Tecnologías</h3>
                        <div>
                            <a href="" target='_blank'>
                                <IconBrandReact />
                                React Js
                            </a>
                            <a href="" target='_blank'>
                                <IconBrandSass />
                                Sass
                            </a>
                            <a href="" target='_blank'>
                                <i className="bi bi-bootstrap-fill"></i>
                                Bootstrap
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row align-items-center contenedor mt-5">

                <div className="col-12 col-md-6">
                    <img src={ErpAutos} />
                </div>

                <div className="col-12 col-md-6">
                    <h2>ERP Autos</h2>
                    <p>
                        Maqueta para un desarrollo de ERP de compañía de Venta de Autos en Puebla. Versión en producción aún sin completar.
                    </p>
                    <p>
                        Uso de Librerías: React Router Dom, Framer Motion
                    </p>

                    <a href="https://tek-robot-autos-angel.netlify.app/" target="_blank">
                        Visitar Sitio
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>

                    <div className='tecnologias'>
                        <h3>Tecnologías</h3>
                        <div>
                            <a href="" target='_blank'>
                                <IconBrandReact />
                                React Js
                            </a>
                            <a href="" target='_blank'>
                                <IconBrandSass />
                                Sass
                            </a>
                            <a href="" target='_blank'>
                                <i className="bi bi-bootstrap-fill"></i>
                                Bootstrap
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row align-items-center contenedor mt-5">

                <div className="col-12 col-md-6">
                    <img src={TierraApp} />
                </div>

                <div className="col-12 col-md-6">
                    <h2>Tierra App</h2>
                    <p>
                        Ejercicio de aplicación web creada con React, poniendo en práctica animaciones y funcionalidades en general.
                    </p>
                    <p>
                        Uso de Librerías: React Router Dom, Framer Motion y StyledComponents
                    </p>

                    <a href="https://tierra-app-felipe-aguilar.netlify.app/" target="_blank">
                        Visitar Sitio
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>

                    <div className='tecnologias'>
                        <h3>Tecnologías</h3>
                        <div>
                            <a href="" target='_blank'>
                                <IconBrandReact />
                                React Js
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row align-items-center contenedor mt-5">

                <div className="col-12 col-md-6">
                    <img src={ListaApp} />
                </div>

                <div className="col-12 col-md-6">
                    <h2>Lista de Contactos</h2>
                    <p>
                        Pequeña aplicación como práctica de curso de React.
                    </p>
                    <p>
                        Uso de Hooks: UseState, useContext
                    </p>
                    <p>
                        Uso de Librerías: StyledComponents, Framer Motion
                    </p>

                    <a href="https://lista-contactos-felipe-aguilar.netlify.app/" target="_blank">
                        Visitar Sitio
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>

                    <div className='tecnologias'>
                        <h3>Tecnologías</h3>
                        <div>
                            <a href="" target='_blank'>
                                <IconBrandReact />
                                React Js
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row align-items-center contenedor mt-5">

                <div className="col-12 col-md-6">
                    <img src={TareasApp} />
                </div>

                <div className="col-12 col-md-6">
                    <h2>Lista de Tareas</h2>
                    <p>
                        Pequeña aplicación como práctica de curso de React.
                    </p>
                    <p>
                        Uso de Hooks: useState
                    </p>
                    <p>
                        Uso de Librerías: StyledComponents, FramerMotion
                    </p>

                    <a href="https://lista-de-tareas-felipe-aguilar.netlify.app/" target="_blank">
                        Visitar Sitio
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>

                    <div className='tecnologias'>
                        <h3>Tecnologías</h3>
                        <div>
                            <a href="" target='_blank'>
                                <IconBrandReact />
                                React Js
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row align-items-center contenedor mt-5">

                <div className="col-12 col-md-6">
                    <img src={CarritoApp} />
                </div>

                <div className="col-12 col-md-6">
                    <h2>Carrito de Compras</h2>
                    <p>
                        Pequeña aplicación como práctica de curso de React. Carrito de compras solo con funcionalidades de agregar al carrito.
                    </p>
                    <p>
                        Uso de Hooks: useState, useContext
                    </p>
                    <p>
                        Uso de Librerías: ReactRouter, StyledComponents
                    </p>

                    <a href="https://carrito-de-compras-felipe-aguilar.netlify.app/" target="_blank">
                        Visitar Sitio
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>

                    <div className='tecnologias'>
                        <h3>Tecnologías</h3>
                        <div>
                            <a href="" target='_blank'>
                                <IconBrandReact />
                                React Js
                            </a>
                            <a href="" target='_blank'>
                                <i className="bi bi-bootstrap-fill"></i>
                                Bootstrap
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;