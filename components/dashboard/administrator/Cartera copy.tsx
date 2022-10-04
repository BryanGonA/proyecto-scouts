import { MDBDataTable } from 'mdbreact';
import { useEffect, useState } from 'react';
import styles from "~/styles/dashboard/administrator/Administrator.module.scss";
import styles2 from "~/styles/dashboard/JefeRama.module.scss";
import { User } from "~/lib/commonInterfaces";
import { useCurrentUser } from "~/hooks/use-current-user";
import Link from "next/link"
import withReactContent from 'sweetalert2-react-content'
import { useRouter } from 'next/router';
import { downloadCSV } from '~/lib/utils';

export default function JefeGrupoCartera() {
    const router = useRouter()

    const Swal = require('sweetalert2')
    const MySwal = withReactContent(Swal)

    let data_pays = {
        columns: [
            {
                label: 'Recibo',
                field: 'receipt',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Fecha',
                field: 'date',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Nombre',
                field: 'name',
                sort: 'asc',
                width: 100
            },
            {
                label: 'concepto',
                field: 'concept',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Valor',
                field: 'value',
                sort: 'asc',
                width: 100
            },
        ],
        rows: []
    }
    const [dataList, setDataList] = useState(data_pays)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payments`, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                let rows = []
                data.forEach((element: any) => {
                    rows.push({
                        receipt: element.receipt,
                        date: element.date,
                        name: element.name,
                        concept: element.concept,
                        value: element.value,
                    })
                });
                setDataList({ ...dataList, rows: rows })
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    

    /*useEffect(() => {
        MySwal.fire({
            title: <strong>DESCARGA DE CARTERA CENTINELAS 113</strong>,
            text: "¿Está seguro de descargar la cartera del Grupo Scout Centinelas 113?",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continuar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                downloadCSV()
                router.push('/dashboard')
            }
            
        })
    }, [])
    return (
        <div>
            <div>
                <h1 className={`${styles.text_title} p-5`}>Cartera Centinelas 113</h1>
            </div>
            <div className={`${styles.text_data} row justify-content-center py-3`}>
                <div className={`${styles.container} py-5 w-100`} id='example'>
                </div>
            </div>
        </div>
    )*/
}