
import styles from './input.module.css'

export default function Input({fullWidth, placeholder})
{
    return(
        <input className={`${styles.input} ${fullWidth && styles.fullWidth}`} placeholder={placeholder}/>
    )
}