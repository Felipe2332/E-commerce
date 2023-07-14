//Funções de React devem ter nome MAIUSCULO, tem que ser exportado e deve ter um retorno HTML
//Cada componente React tem o próprio arquivo CSS

import styles from './navBar.module.css'
import {BsCart4} from 'react-icons/bs'
import Logo from '@/components/logo/logo'
import Input from '../forms/input/input'

export default function NavBar(){
    return(
    <nav className={styles.navBar}>
        <Logo/>
        <div className={styles.search}>
        <Input type="text" placeholder="Buscar" fullWidth/>
        </div>
        <BsCart4 size={40}/>
    </nav>
    )
    
}