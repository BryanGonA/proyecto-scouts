import { MDBDataTable } from "mdbreact";
import { useEffect, useState } from "react";
import styles from "~/styles/dashboard/administrator/Administrator.module.scss";
import styles2 from "~/styles/dashboard/JefeRama.module.scss";
import { User } from "~/lib/commonInterfaces";
import { useCurrentUser } from "~/hooks/use-current-user";
import Link from "next/link";
import withReactContent from "sweetalert2-react-content";

export default function PersonalAdministrator() {
  let data_branch = {
    columns: [
      {
        label: "Nombre",
        field: "name",
        sort: "asc",
        width: 200,
      },
      {
        label: "Adiestramiento",
        field: "level",
        sort: "asc",
        width: 100,
      },
      {
        label: "Cargo",
        field: "charge",
        sort: "asc",
        width: 100,
      },
      {
        label: "Rama",
        field: "branches",
        sort: "asc",
        width: 100,
      },
      {
        label: "Acciones",
        field: "actions",
        sort: "asc",
        width: 150,
      },
    ],
    rows: [],
  };
  const [dataList, setDataList] = useState(data_branch);
  const [loading, setLoading] = useState(true);

  const Swal = require("sweetalert2");
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/personalDetails`, {
      mode: "cors",
      method: "GET",
      headers: {
        "Referrer-Policy": "origin-when-cross-origin",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
        "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_URL}`,
      },
    })
      .then((res) => {
        return res.json().then((data) => {
          if (res.ok) {
            return Promise.resolve(data);
          } else {
            return Promise.reject(data);
          }
        });
      })
      .then((data) => {
        let users = data.data;
        users = users.map((user: any) => {
          let u = {
            name: user.name,
            level: user.personalDetails.level,
            charge: user.personalDetails.charge,
            branches: user.branches ? user.branches.nameBranch : "",
            actions: (
              <>
                <Link href={`/dashboard/jefe-grupo/personal/${user.id}`}>
                  <a>
                    <img
                      className={styles2.icon}
                      src="/img/dashboard/eye.svg"
                    />
                  </a>
                </Link>
                <Link href={`/dashboard/jefe-grupo/personal/editar/${user.id}`}>
                  <a>
                    <img
                      className={styles2.icon}
                      src="/img/dashboard/pencil.svg"
                    />
                  </a>
                </Link>
                <Link href={`/dashboard/jefe-grupo/personal/`}>
                  <a>
                    <img
                      className={styles2.icon}
                      src="/img/dashboard/trash.svg"
                      onClick={() => {
                        fetch(
                          `${process.env.NEXT_PUBLIC_API_URL}/api/users/${user.id}`,
                          {
                            method: "DELETE",
                            headers: {
                              "Referrer-Policy": "origin-when-cross-origin",
                              Authorization:
                                "Bearer " + localStorage.getItem("auth_token"),
                              "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_URL}`,
                            },
                          }
                        )
                          .then((res) => {
                            return res.json().then((data) => {
                              if (res.ok) {
                                return Promise.resolve(data);
                              } else {
                                return Promise.reject(data);
                              }
                            });
                          })
                          .then((data) => {
                            MySwal.fire({
                              icon: "success",
                              title: "Datos eliminados!",
                              text: "Los datos eliminados correctamente",
                              confirmButtonColor: "#31B411",
                              confirmButtonText: "Continuar",
                            }).then(function (isConfirm) {
                              if (isConfirm) {
                                window.location.href =
                                  "/dashboard/jefe-grupo/personal/";
                              }
                            });
                          });
                      }}
                    />
                  </a>
                </Link>
              </>
            ),
          };
          return u;
        });

        data_branch.rows = users;
        setDataList(data_branch);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        <h1 className={`${styles.text_title} p-5`}>
          Gestión de personal administrativo Grupo Scout Centinelas 113
        </h1>
      </div>
      {loading ? (
        <div className="row col-12 mt-5 justify-content-center">
          Cargando Información...
        </div>
      ) : (
        <div className={`${styles.text_data} row justify-content-center py-3`}>
          <div className={`${styles.container} py-5 w-100`} id="example">
            <button type="button" className={`${styles.boton}`}>
              <a
                className={`${styles.letra}`}
                href={`/dashboard/jefe-grupo/personal/agregar/`}
              >
                Agregar personal
              </a>
            </button>

            <MDBDataTable
              striped
              bordered
              hover
              small
              responsiveSm
              responsiveMd
              responsiveLg
              responsiveXl
              fixed
              noBottomColumns={true}
              data={dataList}
              entriesLabel={"Mostrar entradas"}
              infoLabel={["Mostrando", "hasta", "de", "registros"]}
              paginationLabel={["Anterior", "Siguiente"]}
              searchLabel={"Buscar"}
              noRecordsFoundLabel={"No se han encontrado registros"}
            />
          </div>
        </div>
      )}
    </div>
  );
}
