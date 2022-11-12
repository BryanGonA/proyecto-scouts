import Subir from '~/components/botones-flotantes/Subir';
import Whatsapp from '~/components/botones-flotantes/Whatsapp';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="row footer_margin">
                    <div className="col-sm-3 col-12 logos" data-align="center">
                        <img src="/img/pañoleta.png" alt="pañoleta"></img>
                        <img src="/img/logo.png" alt="113"></img>
                        <img src="/img/ACE.png" alt="ACE"></img>
                    </div>
                    <div className="col-sm-3 col-6 terminos" >
                        <a href="/documents/TERMINOS_Y_CONDICIONES.pdf">
                            Términos y condiciones
                        </a>
                    </div>
                    <div className="col-sm-3 col-6 condiciones">
                        <a href='/documents/POLITICAS.pdf'>
                            Políticas de privacidad
                        </a>
                    </div>
                    <div className="col-sm-3 col-12 redes " data-align="center">
                        <a href="https://www.facebook.com/scoutcentinelas113" target="_blank">
                            <img src="/img/facebook.svg" alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/scoutcentinelas.113" target="_blank">
                            <img src="/img/instagram.svg" alt="instagram" />
                        </a>
                    </div>
                </div>
                <div className="row footer_margin">
                    <div className="col-12 texto_copy">
                        <p>Grupo Scout Centinelas 113 • Todos los derechos reservados • <a href='/documents/CREDITOS.pdf' target='_blank'>Diseñado por InnoveSolutions-NICK</a>
                        </p>
                    </div>
                </div>
            </footer>
            <Whatsapp />
            <Subir />
        </>
    )
}
