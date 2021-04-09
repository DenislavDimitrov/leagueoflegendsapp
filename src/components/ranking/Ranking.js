import styles from './Ranking.module.css'
import { useCallback, useEffect, useState } from 'react';
import Champion from './Champion'


const Ranking = () => {
    const [champions, setChampions] = useState([])
    const [category, setCategory] = useState('')

    const getChampions = useCallback(async () => {
        const promise = await fetch(`http://localhost:3003/api/champions/getAll?category=${category}`);
        const response = await promise.json();
        setChampions(response)
    }, [category])

    useEffect(() => {
        getChampions();
    }, [getChampions]);

    const renderChampions = () => {
        return champions.map((champion, index) => {
            return (
                <ul key={champion._id} className={styles.items}>
                    <Champion
                        src={champion.imageUrl}
                        text={champion.name}
                        level={champion.level}
                        label={champion.type}
                        author={champion.author.username}
                        rank={index}
                    />
                </ul>
            )
        })
    }

    const changeCategory = async (e) => {
        e.preventDefault()
        if (e.target.outerText !== 'All'){
            setCategory(e.target.outerText);
        } else {
            setCategory('');
        }

    }

    return (
        <div className={styles.form}>
            <h1 className={styles.h1}>Top 10: {category ? category : 'All champions'}</h1>
            <div className={styles.btnDiv}>
                <button onClick={changeCategory} className={styles.btn}>All</button>
                <button onClick={changeCategory} className={styles.btn}>Mage</button>
                <button onClick={changeCategory} className={styles.btn}>Marksman</button>
                <button onClick={changeCategory} className={styles.btn}>Fighter</button>
                <button onClick={changeCategory} className={styles.btn}>Assassin</button>
                <button onClick={changeCategory} className={styles.btn}>Tank</button>
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