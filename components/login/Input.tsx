import styles from "~/styles/login/Login.module.scss";

export default function Input({atribute,handleChange}:any)  {
    return (
                    <input
                    id={atribute.id}
                    name={atribute.name}
                    placeholder={atribute.placeholder}
                    type={atribute.type}
                    onChange={(e)=> handleChange(e.target.name,e.target.value)}
                    className={(styles.entradas)}
                    maxLength={atribute.maxLength}
                    required
                    
                    />                    
    )
}