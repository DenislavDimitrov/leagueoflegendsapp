import { Link } from 'react-router-dom'
import styles from './Items.module.css'


const Item = (props) => {

    return (
        <>
            <li className={styles.cardsItem}>
                <Link className={styles.itemLink} to={props.path}>
                    <figure className={styles.picWrap} data-category={props.label}>
                        <img className={styles.itemImg} src={props.src} alt='Item'/>
                    </figure>
                    <div className={styles.itemInfo}>
                        <h5 className={styles.itemText}>{props.text}</h5>
                        <h5 className={styles.itemText}>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}
export default Item