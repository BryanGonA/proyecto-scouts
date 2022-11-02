import { useRouter } from 'next/router'
import React, { Children, Dispatch, SetStateAction, useState } from 'react'
import styles from '~/styles/register/Register.module.scss'
import { RegisterDropProps } from './RegisterDropdown'
import { Inputs } from './RegisterForm'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

//const FirstChild = ({ children }) => Children.toArray(children)[0] || null;

interface Props {
    title: string,
    values: Inputs,
    setValues: Dispatch<SetStateAction<Inputs>>,
    children?: React.ReactElement<RegisterDropProps> | React.ReactElement<RegisterDropProps>[]
}


export default function RegisterContainer({title, values, children} : Props) {
    const router = useRouter()
    const [dropDowns, setDropDowns] = useState(new Map<string, any>())
    const MySwal = withReactContent(Swal)

    const handleDropClick = (id : string, isActive : any, setActive : any) => {
        dropDowns.forEach((value, key) => {
            if (key === id) {
                setActive(!isActive)
                return
            }
            if (!isActive && value.isActive) {
                value.setActive(false)
            }
        })
    }

    const openAll = () => {        
        dropDowns.forEach((value: any) => {
            if (!value.isActive) {
                value.setActive(true)
            }
        })
    }
    
    const submit = (e) => {
        e.preventDefault();
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
            body: JSON.stringify(values)
        }).then(async res => {
            const data = await res.json()
            if (res.ok) {
                return Promise.resolve(data)
            } else {
                return Promise.reject(data)
            }
        }).then(data => {
            let userId= data.user.id
            let photo = new FormData()
            photo.append("file",values.photo)
            photo.append("id",userId)

            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/upload/photo`, {
                mode: 'cors',
                method: 'POST',
                body: photo,
                headers: {
                    'Referrer-Policy': 'origin-when-cross-origin',
                    'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
                },
            })

            MySwal.fire({
                icon: 'success',
                title: <p>¡Usuario registrado exitosamente!</p>,
                showConfirmButton: true,
                confirmButtonText: `Entrar`,

            }   
            ).then((result) => {
                if (result.isConfirmed) {
                    //router.push('/login')
                    window.location.href = '/login'
                }
            })
        }).catch(error => {
            MySwal.fire({
                icon: 'error',
                title: <p>Hay errores, por favor verifique la información</p>,
                text: error.message,
                showConfirmButton: false,
                showDenyButton: true,
                denyButtonText: `Cerrar`,
            })

        })
    }

    const updatedChildren = Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                handleDropClick: handleDropClick,
                dropDowns: dropDowns,
                setDropDowns: setDropDowns,
            })
        }
        return child
    })
    return (
        <div className={`${styles.container} container-fluid rounded shadow-sm`}>
            <p className={`${styles.title} text-center`}>{title}</p>
            <form onInvalid={openAll} onSubmit={submit}>
                {updatedChildren}
            </form>
        </div>
    )
}