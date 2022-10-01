
export default function Header({titulo, descripcion, imagen, ultimo}:any) {
    return (
        <div className={ultimo?'col-sm-10 col-lg-8 col-xl-8 mx-2 my-2 p-0 fondo_card w-100 card_final':'col-xl-4 col-lg-8 col-sm-10 mx-2 my-2 p-0 fondo_card w-100'}>
            <div className="barra">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className='fondo'>
                    <path d="M-6.49,81.41 C151.52,160.36 188.20,33.05 501.97,41.94 L501.97,-31.08 L0.00,0.00 Z" className='curva'>
                    </path>
                </svg>               
            </div>
            <div className="barra_2 " >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" className='fondo_2'>
                        <path d="M-6.49,81.41 C151.52,160.36 188.20,33.05 501.97,41.94 L501.97,-31.08 L0.00,0.00 Z" className='curva_2'>
                        </path>
                    </svg>               
                </div>
            <div className='mb-5'>
                <div className='text-center'>
                    <div>
                        <p className='card-title texto_titulo'>
                            {titulo}
                        </p>
                    </div>
                    <div className='limite_descripcion'>
                        <p className='limite_parrafo texto_descripcion-card'>
                            {descripcion}
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-right imagen-card">
                <img src={imagen} alt="imagen" width='15%'/>
            </div>
        </div>
    )
}