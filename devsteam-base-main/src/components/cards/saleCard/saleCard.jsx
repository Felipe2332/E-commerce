
import styles from './saleCard.module.css'
import Image from 'next/image'
import Button from '@/components/forms/button/button'

/*Existem parâmentros dentro dessa função que devem ser passados na página do Index*/
export default function SaleCard({image,discount,fullPrice,discountPrice})
{
    return (
        <div className={styles.saleCard}>
            <Image src={`/products/${image}`} alt={`Produto ${image}`} width={250} height={300}></Image>
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta exclusiva</h3>
                <div className={styles.priceCard}>
                    <div className={styles.percent}>-{discount}</div>
                    <div className={styles.price}>
                        <p className={styles.fullPrice}>R$ {fullPrice}</p>
                        <h4 className={styles.discountPrice}>R$ {discountPrice}</h4>
                    </div>
                </div>
                <Button fullWidth={true}>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}


/*Quando não for passado parâmetro para a função acima, esses valores assumem para não quebrar a página*/
SaleCard.defaultProps ={
    image: 'league-of-legends.jpg',
    discount: '90%',
    fullPrice: '199,90',
    discountPrice: '57,90'
}