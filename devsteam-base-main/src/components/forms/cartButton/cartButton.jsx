import {useState} from 'react'
import styles from './cartButton.module.css'
import {BsCart4} from 'react-icons/bs'
import CartMenu from '@/components/cartMenu/cartMenu'

export default function CartButton(){
    const [open,setOpen] = useState(false)/*se tem algo que precisa ser mostrado na tela, usa useState do próprio React*/ 
    return(
        <div>
            <BsCart4 className={styles.icon}  onClick ={() => {setOpen(!open)}} size={40}/>
            {open && <CartMenu/>}
        </div>
    )
}