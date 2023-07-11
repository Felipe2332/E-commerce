//Funções de React devem ter nome MAIUSCULO, tem que ser exportado e deve ter um retorno HTML
//Cada componente React tem o próprio arquivo CSS

import styles from './navBar.module.css'
import {BsCart4} from 'react-icons/bs'
import Logo from '@/components/logo/logo'

export default function NavBar(){
    return(
    <nav className={styles.navBar}>
        <Logo/>
        <input/>
        <BsCart4 size={40}/>
    </nav>
    )
    
}