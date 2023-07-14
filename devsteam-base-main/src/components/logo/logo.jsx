
import styles from './logo.module.css'
import Image from 'next/image'
//As chaves indicam que está usando JavaScript dentro do HTML e dentro do Componente

export default function logo()
{
    return (
        <div className={styles.logo}>
            <Image src='/logo.svg' width={60} height={60} />
            <h1 className={styles.name}>DevSteam</h1>
        </div>
    )
}