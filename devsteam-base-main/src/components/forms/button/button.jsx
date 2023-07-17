
import styles from './button.module.css'
/*Se esse fullwidth for true, passa o styles fullWitdh*/

export default function Button({children, fullWidth, ...props})
{
    return (
        <button className={`${styles.button} ${fullWidth && styles.fullWidth}`} {...props}>
            {children}
        </button>
    )
}