import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getCookie from '../../utils/cookie'


import styles from './ChampionDetails.module.css'

const Champion = () => {
    const [champion, setChampion] = useState({})
    const [items, setItems] = useState([])
    
    const [secondsFight, setSecondsFight] = useState('Fight')
    const [secondsForge, setSecondsForge] = useState('Forge')

    const params = useParams();

    const getChampion = useCallback(async () => {
        const id = params.championid;
        const promise = await fetch(`http://localhost:3003/api/champions/details?id=${id}`);
        const response = await promise.json();
        setItems(response.items);
        setChampion(response)

    }, [params.championid])

    useEffect(() => {
        getChampion();

        if (secondsFight > 0) {
            setTimeout(() => setSecondsFight(secondsFight - 1), 1000)
        } else if (secondsFight === 0) {
            setSecondsFight("Collect")
        }

        if (secondsForge > 0) {
            setTimeout(() => setSecondsForge(secondsForge - 1), 1000)
        } else if (secondsForge === 0) {
            setSecondsForge("Done")
        }  
        
    }, [getChampion, secondsFight, setSecondsForge, secondsForge]);

    const fight = async (e) => {
        e.preventDefault()

        if (secondsFight === 'Collect') {

            let power = 1;
            champion.items.forEach(element => {

                if (element.type === champion.type) {
                    power += element.power
                }
            });
            const gold = champion.gold + (Math.floor(Math.random() * 10 * power))
            const level = (champion.level + Math.round(Math.random() * 10 * (power / 2)))
            const id = params.championid
            await fetch(`http://localhost:3003/api/champions/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    gold,
                    level
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getCookie('x-auth-token')
                }
            });
            setSecondsFight('Fight')
        } else if (secondsFight === 'Fight') {
            setSecondsFight(10)
        }
    } //to services

    const forge = async (e) => {
        e.preventDefault()

        if (secondsForge === 'Done') {

            const id = params.championid;
            await fetch('http://localhost:3003/api/items', {
                method: 'POST',
                body: JSON.stringify(
                    { id }
                ),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getCookie('x-auth-token')
                }
            });
            setSecondsForge('Forge')
        } else if (secondsForge === 'Forge') {
            if (champion.gold >= 100) {
                setSecondsForge(10)
            }
        }

    }
    const sell = async(e) => {
        e.preventDefault()
        const championId = params.championid;
        const itemId = e.target.id;
        const gold = items.find(x => x._id === itemId)
        
        await fetch(`http://localhost:3003/api/items/${itemId}`, {
            method: 'DELETE',
            body: JSON.stringify(
                { itemId, championId, gold: gold.price}
            ),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        })     
    }

    const renderItems = () => {
        return items.map(item => {

            return (
                <li key={item._id} className={styles.cardsItem}>
                    <div className={styles.itemLink}>
                        <figure className={styles.picWrap} data-category={item.type}>
                            <img className={styles.itemImg} src={item.imageUrl} alt='Item' />
                        </figure>
                        <div className={styles.itemInfo}>
                            <h5 className={styles.itemText}>Item: {item.itemName}</h5>
                            <h5 className={styles.itemText}>Power: {item.power}</h5>
                            <h5 className={styles.itemText}>Price: {item.price}</h5>
                            <button id={item._id} className={styles.button} onClick={sell}>Sell for {item.price}</button>
                        </div>
                    </div>
                </li>

            )
        })

    }


    return (
        <div className={styles.form}>
            <li className={styles.cardsItem}>
                <div className={styles.itemLink}>
                    <figure className={styles.picWrap} data-category={champion.type}>
                        <img className={styles.itemImg} src={champion.imageUrl} alt='Item' />
                    </figure>
                    <div className={styles.itemInfo}>
                        <h5 className={styles.itemText}>Name: {champion.name}</h5>
                        <h5 className={styles.itemText}>Level: {champion.level}</h5>
                        <h5 className={styles.itemText}>Gold: {champion.gold}</h5>

                        <button onClick={fight}
                            className={styles.button}>
                            {secondsFight}
                        </button>
                        <button onClick={forge}
                            className={styles.buttonForge}>
                            {secondsForge}
                        </button>
                    </div>
                </div>
            </li>
            <div >
                {renderItems()}
            </div >
        </div>
    )
}
export default Champion