const Contacto = () => {
    return ( 
        <div className="container contacto">
            <section id="Contacto">
                <div className="row">
                    <div className="col-12">
                        <h5>¡Ha sido un placer compartir mi trabajo y mi experiencia contigo a través de mi portafolio web!</h5>
                        <hr/>
                        <p>
                            Si tienes alguna pregunta o necesitas más información sobre mi experiencia, no dudes en ponerte en contacto conmigo. 
                        </p>
                        <p>
                            Puedes contactarme a través de los siguientes enlaces, estaré encantado de responder a cualquier pregunta o comentario que tengas.

                            Espero tener la oportunidad de colaborar contigo en un futuro próximo.
                        </p>

                        <div className="redes">
                            <a href="https://wa.me/5560078218" target="_blank">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/felipe-aguilar-333996211/" target="_blank">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="mailto: felipe.aguilar0g@gmail.com">
                                <i className="bi bi-envelope-fill"></i>
                            </a>
                            <a href="tel: 5560078218">
                                <i className="bi bi-phone"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contacto;