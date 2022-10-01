import Link from "next/link";
import styles from "~/styles/unete/Unete.module.scss";

export default function Unete({ titulo, descripcion, imagen }: any) {
  return (
    <>
      <div className={styles.portada}>
        <div className={`${styles.fondos} ${styles.secpad}`}>
          <div className={styles.elementos_portada}>
            <div className={styles.titulo}>
              <p>¿Quieres ser Scout?</p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className={`container ${styles.fondo2} ${styles.secpad}`}>
          <p className={styles.titulo}>¡Un grupo como te lo imaginas!</p>
          <p className={styles.texto}>
            Has iniciado el proceso de inscripción a nuestro grupo Scout. Te
            invitamos a conocer de manera resumida lo que es el movimiento
            Scout:
          </p>
          <p className={styles.desc}>
            “El Movimiento Scout, es un movimiento de educación no formal,
            complementario a la formación que recibe el joven de la familia y la
            escuela. Es un proceso educativo para gente joven, dirigido por
            adultos, cuyo propósito es el de contribuir al desarrollo integral
            del muchacho (en cuanto a lo personal y social) y a la educación
            permanente de los jóvenes.
          </p>
          <p className={styles.desc}>
            Es un movimiento voluntario y apolítico, abierto a todos sin
            distinción de credo, raza o posición social. En cuanto a sus
            objetivos, la Asociación Scout propende, entre otros, por: Proponer
            al muchacho un plan de trabajo acorde a su edad e intereses,
            estimular el desarrollo equilibrado de las diversas dimensiones de
            la personalidad de los jóvenes, adoptar un estilo de vida que lo
            guie a ser un buen ciudadano, con sentido de servicio y ayuda al
            prójimo y desarrollar un proyecto educativo complementario al hogar
            y la escuela.”
          </p>
          <p className={styles.desc}>
            Al convertirte en integrante de nuestro grupo, se adquieren los
            siguientes COMPROMISOS:
          </p>
          <div className="row">
            <div
              className={`col-md-12  col-sm-12 mx-2 my-2 p-0 ${styles.tarjeta_fondo} w-100`}
            >
              <div className={styles.barra}>
                <svg
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  className={styles.fondo}
                >
                  <path
                    d="M-6.49,81.41 C151.52,160.36 188.20,33.05 501.97,41.94 L501.97,-31.08 L0.00,0.00 Z"
                    className={styles.curva}
                  ></path>
                </svg>
              </div>
              <div className={styles.barra_2}>
                <svg
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  className={styles.fondo_2}
                >
                  <path
                    d="M-6.49,81.41 C151.52,160.36 188.20,33.05 501.97,41.94 L501.97,-31.08 L0.00,0.00 Z"
                    className={styles.curva_2}
                  ></path>
                </svg>
              </div>

              <p className={styles.titulo}>Acudientes:</p>
              <div className={`container-fluid ${styles.desc}`}>
                <p className={styles.desc}>
                  <ul>
                    <li>
                      Apoyar al muchacho, motivarlo y brindarle las facilidades
                      para que participe de las actividades programadas.
                    </li>
                  </ul>
                </p>

                <p className={styles.desc}>
                  <ul>
                    <li>
                      Asistir a las citaciones que el grupo haga para evaluar el
                      estado de sus hijos o para apoyar las actividades que el
                      grupo realice.
                    </li>
                  </ul>
                </p>
                <p className={styles.desc}>
                  <ul>
                    <li>
                      Que el muchacho cuente un servicio de Salud (EPS, SISBEN,
                      etc.) vigente al momento de ingresar.
                    </li>
                  </ul>
                </p>
                <p className={styles.desc}>
                  <ul>
                    <li>
                      Soportar económicamente la permanencia de su hijo en
                      cuanto a:
                      <ol>
                        <li>
                          Inscripción de Ingreso Mensualidad.
                          <li>
                            Costos de Uniformes Costos de Salidas, excursiones,
                            campamentos, etc.
                          </li>
                          <li>Inscripción a nivel Nacional a la A.C.E.</li>
                        </li>
                      </ol>
                    </li>
                  </ul>
                </p>
                <p className={styles.desc}>
                  <ul></ul>
                </p>
                <ul>
                  <p className={styles.desc}>
                    <li>
                      Conocer y cumplir el{" "}
                      <a href="/documents/REGLAMENTO_INTERNO_DE_GRUPO_SCOUT_CENTINELAS_113.pdf" target="_blank">
                        reglamento interno de grupo.
                      </a>
                    </li>
                  </p>
                </ul>

                <ul>
                  <p className={styles.titulo}>Aspirantes:</p>
                  <li>
                    Asistir cumplidamente a las reuniones de la rama y presentar
                    resultados de su plan de adelanto en el plazo definido con
                    su dirigente.
                  </li>
                  <li>
                    Asumir el compromiso y las reglas sugeridas de acuerdo con
                    los valores que el escultismo propone.
                  </li>
                  <li>
                    Motivar a los padres, acudiente y/o familia para que
                    participen de las actividades del Grupo Scout.
                  </li>
                  <li>
                    Portar correctamente el uniforme de acuerdo con lo dispuesto
                    en la reglamentación vigente y en el plazo determinado por
                    el Grupo Scout.
                  </li>
                  <li>
                    Portar siempre consigo el documento de identidad (o una
                    copia) durante las actividades que realice con el Grupo
                    Scout.
                    <li>
                      Conocer y cumplir el{" "}
                      <a href="/documents/REGLAMENTO_INTERNO_DE_GRUPO_SCOUT_CENTINELAS_113.pdf" target="_blank">
                        reglamento interno de grupo.
                      </a>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.buton}>
            <Link href="/registro">
              <button type="button" className={styles.rectangle}>Inscríbete</button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.container_video}>
          <div className={styles.embed_container}>
            <iframe src="https://www.youtube.com/embed/12cJsA5l_II" frameBorder="0" allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <div className="container content-center">
            <p className={styles.titulo}>¡Nuestro grupo alrededor del mundo!</p>
            <div className="row">
              <div className="col-md-4">
                <div className={styles["Productos-container"]}>
                  <div className={styles["Productos-details"]}></div>
                  <img src="/img/unete/cancun1.png" className="" alt="logo1" />
                </div>
              </div>
              <div className="col-md-4 content-center">
                <div className={styles["Productos-container"]}>
                  <div className={styles["Productos-details"]}></div>
                  <img src="/img/unete/cancun2.png" className="" alt="logo1" />
                </div>
              </div>
              <div className="col-md-4 content-center">
                <div className={styles["Productos-container"]}>
                  <div className={styles["Productos-details"]}></div>
                  <img src="/img/unete/cancun3.png" className="" alt="logo1" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 content-center">
                <div className={styles["Productos-container"]}>
                  <div className={styles["Productos-details"]}></div>
                  <img src="/img/unete/panole1.png" className="" alt="logo1" />
                </div>
              </div>
              <div className="col-md-4 content-center">
                <div className={styles["Productos-container"]}>
                  <div className={styles["Productos-details"]}></div>
                  <img src="/img/unete/panole4.png" className="" alt="logo1" />
                </div>
              </div>
              <div className="col-md-4 content-center">
                <div className={styles["Productos-container"]}>
                  <div className={styles["Productos-details"]}></div>
                  <img src="/img/unete/panole3.png" className="" alt="logo1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
