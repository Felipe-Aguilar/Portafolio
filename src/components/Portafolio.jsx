import { IconBrandPhp, IconBrandMysql, IconSql, IconBrandSass, IconBrandJavascript, IconBrandReact } from '@tabler/icons-react';

import Tarjet from '../assets/Tarjet.jpg';
import Goza from '../assets/Goza1.webp';
import Yalogics from '../assets/Yalogics.webp';
import Dkassa from '../assets/Dkassa1.webp';
import South from '../assets/South1.webp';
import Cigars from '../assets/Cigars1.webp';
import Babel from '../assets/Babel1.webp';

const Portafolio = () => {
    return ( 
        <div className='w-100'>
            <div className="row align-items-center contenedor">

                <div className="col-12 col-md-6">
                    <img src={Tarjet} />
                </div>

                <div className="col-12 col-md-6">
                    <h2>Tarjet</h2>
                    <p>
                        Aplicación web de Tarjetero digital. 
                    </p>
                    <p>
                        Lectura y envío de datos a través de API's Rest. Compartir tu tarjeta digital en diferentes redes sociales. Generador de códigos Qr para compartir tarjetas. Guardar y tener un directorio de tarjetas digitales en tu perfil. 
                    </p>

                    <a href="http://tarjet.site/" target="_blank">
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
                    <img src={Goza} />
                </div>

                <div className="col-12 col-md-6">
                    <h2>Goza Mx</h2>
                    <p>
                        Ecommerce de Ropa para Dama marca totalmente Mexicana. Pasarela de pagos con Mercado pago y Paypal, envíos automatizados con Skydropx.
                    </p>
                    <p>
                        Desarrollo de Ecommerce con conexión en tiempo real de inventario con punto de venta para la gestión de artículos en ambos ambientes. 
                    </p>

                    <a href="https://gozamx.com/" target="_blank">
                        Visitar Sitio
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>

                    <div className='tecnologias'>
                        <h3>Tecnologías</h3>
                        <div>
                            <a href="" target='_blank'>
                                <i class="bi bi-wordpress"></i>
                                Wordpress
                            </a>
                            <a href="" target='_blank'>
                                <IconBrandPhp />
                                PHP
                            </a>
                            <a href="" target='_blank'>
                                <IconBrandMysql />
                                MySQL
                            </a>
                            <a href="" target='_blank'>
                                <IconSql />
                                SQL
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row align-items-center contenedor mt-5">

                <div className="col-12 col-md-6">
                    <img src={Yalogics} />
                </div>

                <div className="col-12 col-md-6">
                    <h2>Yalogics</h2>
                    <p>
                        Creación de Ecommerce en CMS y desarrollos web en general.
                    </p>
                    <p>
                        Desarrollo de sitio web informativo con vista a portafolio y medio de contacto mediante el sitio web.
                    </p>

                    <a href="https://yalogics.com/" target="_blank">
                        Visitar Sitio
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>

                    <div className='tecnologias'>
                        <h3>Tecnologías</h3>
                        <div>
                            <a href="" target='_blank'>
                                <IconBrandPhp />
                                PHP
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
                    <img src={Dkassa} />
                </div>

                <div className="col-12 col-md-6">
                    <h2>Dkassa</h2>
                    <p>
                        Ecommerce de Venta de Muebles de alta calidad en Nuevo León Monterrey.
                    </p>
                    <p>
                        Desarrollo de Ecommerce con gran cantidad de productos en el catálogo. Implementación de pagos seguros dentro del sitio con OpenPay. Gestión de envíos automatizados a toda la república Mexicana.
                    </p>

                    <a href="https://dkassa.com.mx/" target="_blank">
                        Visitar Sitio
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>

                    <div className='tecnologias'>
                        <h3>Tecnologías</h3>
                        <div>
                            <a href="" target='_blank'>
                                <i class="bi bi-wordpress"></i>
                                Wordpress
                            </a>
                            <a href="" target='_blank'>
                                <IconBrandJavascript />
                                JavaScript
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row align-items-center contenedor mt-5">

                <div className="col-12 col-md-6">
                    <img src={South} />
                </div>

                <div className="col-12 col-md-6">
                    <h2>South Dental</h2>
                    <p>
                        Clínica especializada en odontología para toda la familia.
                    </p>
                    <p>
                        Desarrollo de Sitio Web informativo
                    </p>

                    <a href="https://southdentalmexico.com/" target="_blank">
                        Visitar Sitio
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>

                    <div className='tecnologias'>
                        <h3>Tecnologías</h3>
                        <div>
                            <a href="" target='_blank'>
                                <i class="bi bi-wordpress"></i>
                                Wordpress
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
                    <img src={Cigars} />
                </div>

                <div className="col-12 col-md-6">
                    <h2>Cigars & Luxury</h2>
                    <p>
                        Ecommerce de habanos en México. Sitio para su venta a mayores de edad ( + 18 ).
                    </p>
                    <p>
                        Desarrollo de Ecommerce con gran amplitud en catálogo. Implementación de pasarela de pago Paypal.
                    </p>

                    <a href="https://cigarsandluxury.com/" target="_blank">
                        Visitar Sitio
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>

                    <div className='tecnologias'>
                        <h3>Tecnologías</h3>
                        <div>
                            <a href="" target='_blank'>
                                <i class="bi bi-wordpress"></i>
                                Wordpress
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row align-items-center contenedor mt-5">

                <div className="col-12 col-md-6">
                    <img src={Babel} />
                </div>

                <div className="col-12 col-md-6">
                    <h2>Babel Traductores</h2>
                    <p>
                        Servicios de Traducción de documentos, eventos y conferencias en Monterrey Nuevo León.
                    </p>
                    <p>
                        Desarrollo de sitio web informativo totalmente dinámico y fuera de lo común para un sitio web.
                    </p>

                    <a href="https://babeltraductores.com.mx/" target="_blank">
                        Visitar Sitio
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>

                    <div className='tecnologias'>
                        <h3>Tecnologías</h3>
                        <div>
                            <a href="" target='_blank'>
                                <i class="bi bi-wordpress"></i>
                                Wordpress
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portafolio;