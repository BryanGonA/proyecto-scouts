import { useState, useEffect } from "react";
import { Button, Modal } from 'react-bootstrap';
import Select from 'react-select';
import MultiSelect from "react-multi-select-component";

export default function ActionBranch({id, value} : any) {
    const [show, setShow] = useState(false);
    const handleClosePut = () => {
        setShow(false)
        changeBranchUser(selected)   
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading, setLoading] = useState(true)
    const [selected, setSelected] = useState({value:0, label:''})
    const [branches, setBranches] = useState([])
    const [datosUsuario, setDatosUsuario] = useState(null)
    var lista = []

    function getBranches(){
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/branches`, {
            mode: 'cors',
            method: 'GET',
            headers: {
            'Referrer-Policy': 'origin-when-cross-origin',
            'Authorization': "Bearer " + localStorage.getItem("auth_token"),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
        }).then(res => {
            return res.json().then(data => {
                if (res.ok) {
                    return Promise.resolve(data)
                } else {
                    return Promise.reject(data)
                }
            })
        }).then(data => {          
            data.data.map((branches)=>{
                let datos = {
                value: branches.id,
                label: branches.nameBranch,                
                }              
                lista.push(datos)
            })          
        }).then(()=>{
            setBranches(lista)            
        })
    }

    function getSeletedBranch(){
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
            mode: 'cors',
            method: 'GET',
            headers: {
            'Referrer-Policy': 'origin-when-cross-origin',
            'Authorization': "Bearer " + localStorage.getItem("auth_token"),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
        },
        }).then(res => {
            return res.json().then(data => {
                if (res.ok) {
                    return Promise.resolve(data)
                } else {
                    return Promise.reject(data)
                }
            })
        }).then(data => {            
            let default_value = {
                value:data.data.branches.id,
                label:data.data.branches.nameBranch
            }            
            setSelected(default_value)                         
        }).then(()=>{              
            setLoading(false)              
        })

    }
    
    async function changeBranchUser(branch){ 

        let newBranch = {id:branch.value, nameBranch:branch.label} 
        
        let auxliar = {
            ... datosUsuario,
            branches:newBranch
        }
        setDatosUsuario(auxliar)
            
        
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {              
            method: 'PUT',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
            
            body:JSON.stringify(auxliar)
            }).then(res => {
                return res.json()
                    .then(data => {                    
                    if (res.ok) {                                  
                        return Promise.resolve(data)
                    } else {                
                        return Promise.reject(data)
                    }
                    })  
            })            
        
    }
    useEffect(()=>{
        getBranches()
        getSeletedBranch()
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
            mode:'cors',
            method: 'GET',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },           
            }).then(res => {
                return res.json().then(data => {
                    if (res.ok) {
                    return Promise.resolve(data)
                    } else {
                    return Promise.reject(data)
                    }
                })
            }).then(data => {               
            setDatosUsuario(data['data'])                 
        })  
        
    },[])

    function getOptions(input) {  
        setSelected(input)        
    }

    return (       
        <>
            <div>
                <label onClick={handleShow}>{value.nameBranch}</label> {/* El usuario debe llenar todos los campos para poder ser mostrado en las páginas subsiguientes. */}
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center">Seleccione la Rama a ingresar</Modal.Title>
                </Modal.Header>
                {loading ? (
                    <div className="row col-12 mt-5 justify-content-center" >
                    Cargando Información...
                    </div>
                ) : (
                    <Modal.Body>                        
                        <Select
                            value={selected}
                            onChange={getOptions}
                            options={branches}
                            />
                    </Modal.Body>
                )}
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClosePut}>
                    Continuar
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                    Cancelar
                    </Button>
                </Modal.Footer>
                </Modal>
            </div>          
        </>
    )
}