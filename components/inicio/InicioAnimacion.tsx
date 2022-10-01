import { useRef } from "react";
import { useCookies } from 'react-cookie';

export default function Inicio({visited} : any) {
  const [cookies, setCookie] = useCookies(['visited']);
  const ole1 = useRef(null);

  const principal = useRef(null);

  const ole2 = useRef(null);
  const elementos = useRef(null);

  const onClick = () => {
    ole1.current.className = "animacion_ola animacion_prueba3";
    ole2.current.className = "animacion_olas animacion_prueba3";
    elementos.current.style.display = "none";
    setTimeout(() => {
      document.body.className = "";
      principal.current.style.display = "none";
      setCookie('visited', "true", { path: '/' })
    }, 700);
  };

  return (
    <>
    {visited === "true" ? null :
    <div id="Principal" className="animacion_fondo_inicio" ref={principal}>
    <div className="animacion_fondo2">
      <div className="animacion_ola" id="ole2" ref={ole1}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="animacion_ola2"
        >
          <path
            d="M-10.61,120.69 C295.26,216.41 251.24,33.84 546.95,64.44 L500.00,0.00 L0.00,0.00 Z"
            className="animacion_ola3"
          ></path>
        </svg>
      </div>
      <div className="animacion_olas" id="ole2" ref={ole2}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="animacion_olas2"
        >
          <path
            d="M-10.61,120.69 C295.26,216.41 251.24,33.84 546.95,64.44 L500.00,0.00 L0.00,0.00 Z"
            className="animacion_olas3"
          ></path>
        </svg>
        <div className="animacion_fondo_inicio" ref={elementos}>
      
        <p className="animacion_text animacion_fondo_texto">Grupo Scout Centinelas 113 - Cali</p>
        <p className="animacion_text2 animacion_fondo_texto2">Scout A.C.E</p>
        <div className="animacion_foto_logo">
          <img src="/img/pañoleta.png"  alt="logo1" />
          <img src="/img/113.png"  alt="logo1" />
          <img src="/img/ACE.png"  alt="logo1" />
          <button className="animacion_rectangle" onClick={onClick}>
          ¡Conócenos!
        </button>
        </div>
      </div>
    </div>
      </div>
      
    <div>
      <body className="scroll">
        
      </body>
    </div>
  </div>}
    </>
  );
}
