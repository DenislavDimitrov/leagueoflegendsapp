import styles from './Ranking.module.css'
import { useCallback, useEffect, useState } from 'react';
import Champion from './Champion'


const Ranking = () => {
    const [champions, setChampions] = useState([])
    
    const getChampions = useCallback(async () => {
       
        const promise = await fetch(`http://localhost:3003/api/champions/getAll`);
        const response = await promise.json();
        console.log(response);
        setChampions(response)
    }, [])
    
    useEffect(() => {
        getChampions();
      }, [getChampions]);

      const renderChampions = () => {
        return champions.map((champion, index) => {
            return (
                <ul  key={champion._id} className={styles.items}>
                <Champion
                src={champion.imageUrl}
                text={champion.name}
                level={champion.level}
                label = {champion.type}
                author = {champion.author.username}
                rank = {index}
                />
                </ul>
            )
        })
    }

    return (
        <div className={styles.form}>
        <h1 className={styles.h1}>Top 10</h1>  
        <div className={styles.btnDiv}>
        <button className={styles.btn}>Mage</button>
        <button className={styles.btn}>Marksman</button>
        <button className={styles.btn}>Fighter</button>
        <button className={styles.btn}>Assassin</button>
        <button className={styles.btn}>Tank</button>
        </div>   
        <div className={styles.itemsContainer}>
            <div className={styles.itemsWrapper}>
                {renderChampions()}
                
            </div>
        </div>
    </div>
    )
}
export default Ranking