import React, { useEffect, useRef, useState } from 'react'
import { FormLabel } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import styles from '~/styles/register/Register.module.scss'

export interface RegisterDropProps {
    id: string,
    title: string,
    active?: boolean,
    handleDropClick?: any,
    dropDowns?: Map<string, any>,
    setDropDowns?: any,
    children?: any
}

export default function RegisterDropdown({ id, title, active, handleDropClick, dropDowns, setDropDowns, children }: RegisterDropProps) {
    const collapse = useRef(null)
    const header = useRef(null)
    const count = useRef(null)
    const [isActive, setActive] = useState(active ? active : false)
    const [isTransitioning, setTransitioning] = useState(false)

    if (setDropDowns && dropDowns) {
        const options = {
            id: id,
            isActive: isActive,
            setActive: setActive
        }
        setDropDowns(dropDowns.set(id, options))
    }

    const show = () => {
        let classList = collapse.current.classList

        if (isTransitioning || classList.contains('show')) {
            return
        }

        classList.remove('collapse')
        classList.add('collapsing')
        collapse.current.style.height = 0;
        setTransitioning(true)
        setTimeout(() => {
            classList.remove('collapsing')
            classList.add('collapse')
            classList.add('show')
            collapse.current.style.height = '';
            setTransitioning(false)
        }, 0.35*1000)
        collapse.current.style.height = collapse.current.scrollHeight + "px"
    }

    const hide = () => {
        let classList = collapse.current.classList

        if (isTransitioning || !classList.contains('show')) {
            return
        }

        collapse.current.style.height = collapse.current.scrollHeight + "px"
        collapse.current.offsetHeight
        classList.add('collapsing')
        classList.remove('collapse')
        classList.remove('show')
        setTransitioning(true)
        collapse.current.style.height = '';
        setTimeout(() => {
            setTransitioning(false)
            classList.remove('collapsing')
            classList.add('collapse')
        }, 0.35*1000)
    }

    // function recursiveMap(children: NodeList, fn) {
    //     return children.forEach((child: Node, key:number) => {
    //         if (!child.childNodes) {
    //             return
    //         } else {
    //             child = recursiveMap(child.childNodes, fn)
    //         }

    //         return
    //     })
    //   }

    function countRequiredTag(tag: string): number {
        let elements = document.getElementById(id).getElementsByTagName(tag);
        let count = 0
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i]
            if (element.hasAttribute('required')) {
                count++;
            }
        }
        return count
    }

    useEffect(() => {
        if (isActive) {
            show()
        } else {
            hide()
        }
    }, [isActive]);

    /*useEffect(() => {
        let number = 0;
        
        count.current.innerText = number.toString()
        if (count.current) {
            count.current.textContent = "0/" + (countRequiredTag('input')+countRequiredTag('select'))
        }
    }) */

    return (
        <div className="card">
            <div className={`${styles.dropHeader} card-header`} onClick={() => handleDropClick(id, isActive, setActive)} ref={header}>
                <h2 className="mb-0">
                    <div className={`${styles.dropCollapse} d-flex align-items-center`}>
                        <div className={`flex-fill mb-0`}>
                            {isActive ?
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-up-square" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path fillRule="evenodd" d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z"/>
                            </svg> :
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-square" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3.544 6.295A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5a.5.5 0 0 1-.082-.537z"/>
                                <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            </svg>}
                        </div>
                        <p className={`${styles.dropTitle} text-center flex-fill mb-0`}>{title}</p>
                        <p className={`${styles.dropTitle} text-right flex-fill mb-0`} ref={count}></p>
                    </div>
                </h2>
            </div>
            <div className={"collapse " + (active ? "show" : "")} ref={collapse} id={id}>
                <div className="card-body">{children}</div>
            </div>
        </div>
    )
}