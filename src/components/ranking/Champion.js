
import styles from './Champion.module.css'


const Champion = (props) => {

    return (
        <>
            <li className={styles.cardsItem}>
                <div className={styles.itemLink}>
                    <figure className={styles.picWrap} data-category={props.label}>
                        <img className={styles.itemImg} src={props.src} alt='Item' />
                    </figure>
                    <div className={styles.itemInfo}>
                        <h5 className={styles.itemText}>Rank: {props.rank+1}</h5>
                        <h5 className={styles.itemText}>Name: {props.text}</h5>
                        <h5 className={styles.itemText}>Level: {props.level}</h5>
                        <h5 className={styles.itemText}>Owner: {props.author}</h5>

                    </div>
                </div>
            </li>
        </>
    )
}
export default Champion