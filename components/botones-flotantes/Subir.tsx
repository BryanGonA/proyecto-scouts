import { useEffect, useState } from "react";

export default function Subir() {
    const [hide, setHide] = useState(true);
    const handleScroll = () => {
        window.scrollY < 100 ? !hide && setHide(true) : hide && setHide(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
    return (
        <>
            {hide ?
                null : <span className="subir">
                    <a href="#">
                        <img src="/img/subir.svg" alt="subir" />
                    </a>
                </span>}
        </>
    )
}