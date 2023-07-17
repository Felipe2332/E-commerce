//Funções de React devem ter nome MAIUSCULO, tem que ser exportado e deve ter um retorno HTML
//Cada componente React tem o próprio arquivo CSS

import styles from './navBar.module.css'
import {BsCart4} from 'react-icons/bs'
import Logo from '@/components/logo/logo'
import Input from '../forms/input/input'
import CartButton from '../forms/cartButton/cartButton'

export default function NavBar({cart,onRemove}){
    return(
    <nav className={styles.navBar}>
        <Logo/>
        <div className={styles.search}>
        <Input type="text" placeholder="Buscar" fullWidth/>
        </div>
        <CartButton  cart ={cart} onRemove = {onRemove}/>
    </nav>
    )
    
}