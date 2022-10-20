import { MDBDataTable } from "mdbreact";
import { useEffect, useState } from "react";
import styles from "~/styles/dashboard/administrator/Administrator.module.scss";
import styles2 from "~/styles/dashboard/JefeRama.module.scss";
import { User } from "~/lib/commonInterfaces";
import { useCurrentUser } from "~/hooks/use-current-user";
import Link from "next/link";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";
import { downloadCSV } from "~/lib/utils";

export default function JefeGrupoCartera() {
  const router = useRouter();

  const Swal = require("sweetalert2");
  const MySwal = withReactContent(Swal);

  let data_pays = {
    columns: [
      {
        label: "No. recibo",
        field: "receipt",
        sort: "asc",
        width: 100,
      },
      {
        label: "Fecha",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Nombre",
        field: "name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Concepto",
        field: "concept",
        sort: "asc",
        width: 100,
      },
      {
        label: "Valor",
        field: "value",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  };
  const [dataList, setDataList] = useState(data_pays);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payments`, {
      mode: "cors",
      method: "GET",
      headers: {
        "Referrer-Policy": "origin-when-cross-origin",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
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
        let rows = [];
        rows = data.map((item) => {
            let u = {
           
                receipt: item.receipt,
                date: item.date,
                name: item.name,
                concept: item.concept,
                value: item.value,
            }
            return u;
        });
        setDataList({ ...dataList, rows: rows });
        setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);
    
    
  return (
    <div>
      <div>
        <h1 className={`${styles.text_title} p-5`}>Cartera Centinelas 113</h1>
      </div>
      <div className={`${styles.text_data} row justify-content-center py-3`}>
        <div className={`${styles.container} py-5 w-100`} id="example">
          <button
            type="button"
            className={`${styles.boton}`}
            onClick={() => downloadCSV()}
          >
            <a className={`${styles.letra}`}>Descargar</a>
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
    </div>
  );
}