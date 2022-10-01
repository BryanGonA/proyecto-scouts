import { useRouter } from 'next/router'
import { createContext, useEffect, useRef, useState } from 'react'
import useWindowDimensions from '~/hooks/use-windowDimensions'
import styles from '~/styles/dashboard/Slidebar.module.scss'
import Header from './Header'
import SideGroup from './SideGroup'

export const SidebarContext = createContext({});

export default function Sidebar({content, branch, children}: any) {
    const router = useRouter()
    const sidebar = useRef(null)
    const sideContent = useRef(null)

    const { height, width } = useWindowDimensions();
    const [responsive, setResponsive] = useState(false);

    const open = () => {
        sidebar.current.style.width = "100%";
    }

    const close = () => {
        sidebar.current.style.width = "0";
    }

    useEffect(() => {
        setResponsive(width <= 720)
    }, [width])

    useEffect(() => {
        open()
    }, [])

    return(
        <SidebarContext.Provider value={responsive}>
            <div className='d-flex'>
                <div className={`${styles.sidebar} `} ref={sidebar}>
                    <Header branchName={branch}/>
                    <SideGroup>
                        {children}
                    </SideGroup>
                </div>
                <div className={`${styles.content} flex-fill`} ref={sideContent}>
                    {content}
                </div>
            </div>
        </SidebarContext.Provider>
        

    )

}