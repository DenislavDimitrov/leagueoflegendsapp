import styles from './Store.module.css'
import Items from './Items'
import picture from '../../public/img-9.jpg'

const Store = () => {
    //fetch
    //filter
    //search
    return (
        <div className={styles.form}>
            <h1 className={styles.h1}>Store </h1>
            <p className={styles.h1}>Here, in the store, you can buy items for your battles. </p>

            <div className={styles.itemsContainer}>
                <div className={styles.itemsWrapper}>
                    <ul className={styles.items}>
                    <Items
                    src={picture}
                    text = 'Check this out'
                    label = 'Mage'
                    path='/details'
                    />
                    </ul>
                    <ul className={styles.items}>
                    <Items
                    src={picture}
                    text = 'Seller: Someone Price: 20'
                    label = 'Mage'
                    path='/details'
                    />
                    </ul>
                    <ul className={styles.items}>
                    <Items
                    src={picture}
                    text = 'Check this out'
                    label = 'Mage'
                    path='/details'
                    />
                    </ul>
                    <ul className={styles.items}>
                    <Items
                    src={picture}
                    text = 'Check this out'
                    label = 'Mage'
                    path='/details'
                    />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}
export default Store