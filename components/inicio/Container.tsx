export default function Container({ children, imagen}: any) {
    return (
        <div className='contenedor-padding '>
            <div className='row contenedor-paddingm-5 pb-5 backgroun_container justify-content-center contenedor_metodo_scout'>
                
                <img src={imagen} alt="imagen" className="antorcha_1"/>
                                
                <div className="text-center mb-5">
                    <h1 className='texto_titulo'>Método Scout</h1>
                    <p className='texto_descripcion'>Es un sistema de autoeducación, progresivo y personalizado, complementado a la familia y el colegio, a partir de la interacción de varios elementos.</p>
                </div>            
                { children }
                <div className='mt-5 hidden-sm-down'>
                    <img src={imagen} alt="imagen" className="antorcha_2"/>
                </div>   
            </div>
        </div>        
    )
}