import FotoPerfil from '../assets/FotoPerfil.jpg';

const AcercaDe = () => {
    return ( 
        <div className="container acerca-de">
            <section id='AcercaDe'>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <img src={FotoPerfil} className='img-fluid' />
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>¡Hola!</h2>
                        <p>
                            Mi nombre es Felipe Aguilar, y soy ingeniero en Informática graduado de la Universidad Politécnica del Valle México
                        </p>
                        <p>
                            Me especializo en el desarrollo Front-End de aplicaciones web y cuento con más de 2 años de experiencia en el campo. Durante este tiempo, he trabajado en la construcción de Ecommerce y en la sistematización de procesos para estos mismos, optimizando sitios web y mejorando el posicionamiento SEO de los mismos.
                        </p>
                        <p>
                            ¡Gracias por visitar mi perfil! Si deseas saber más sobre mi experiencia y habilidades, no dudes en ponerte en contacto conmigo.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AcercaDe;