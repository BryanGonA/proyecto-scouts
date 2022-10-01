import Link from "next/link"
import { fetcherBlobWithToken } from "~/lib/fetcher"
import styles from "~/styles/dashboard/JefeRama.module.scss"

export default function MyBranchActions({id, doc} : any) {

    function downloadPDF() {
        fetch(process.env.NEXT_PUBLIC_API_URL + `/api/users/generatePDF/${id}`, {
            method: 'GET',
            headers: new Headers({
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            })
        })
        .then(response => response.blob())
        .then(blob => {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = "filename.xlsx";
            Object.assign(document.createElement('a'), { target: '_blank', href: url, download: `ficha-${doc}.pdf`}).click();
            setTimeout(function(){
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(url);
            }, 100);
        });
    }

    return (
        <>
        <Link href={`/dashboard/info/${id}`}>
            <a><img className={styles.icon} src="/img/dashboard/eye.svg" /></a>
        </Link>
        <img className={styles.icon} src="/img/dashboard/download.svg" onClick={downloadPDF}/>
        
        <Link href={`/dashboard/payments/${id}`}>
            <a><img className={styles.icon} src="/img/dashboard/payments.svg" /></a>
        </Link>
        <Link href={`/dashboard/jefe-rama/adelantos/${id}`}>
            <a><img className={styles.icon} src="/img/dashboard/progress.svg" /></a>
        </Link>
        </>
    )
}