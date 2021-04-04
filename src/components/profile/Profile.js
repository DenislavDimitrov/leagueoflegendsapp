import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Profile.module.css'
import Champions from './Champions'



const Profile = () => {
    const [champions, setChampions] = useState([])
    const params = useParams();

    const getChampions = useCallback(async () => {
        const id = params.userid;
        const promise = await fetch(`http://localhost:3003/api/champions?id=${id}`);
        const response = await promise.json();
      
        setChampions(response)
    }, [params.userid])
    
    useEffect(() => {
        getChampions();
      }, [getChampions]);
      
    const renderChampions = () => {
        return champions.map((champion) => {
            return (
                <ul  key={champion._id} className={styles.items}>
                <Champions
                src={champion.imageUrl}
                text={champion.name}
                level={champion.level}
                label = {champion.type}
                path={`/details/${champion._id}`}
                />
                </ul>
            )
        })
    }
      
    //filter
    //search
    return (
        <div className={styles.form}>
            <h1 className={styles.h1}>Hello, Summoner </h1> 
            {/* to add Summoner name */}
            <p className={styles.h1}>Choose your champion. </p>

            <div className={styles.itemsContainer}>
                <div className={styles.itemsWrapper}>
                    {renderChampions()}
                    
                </div>
            </div>
        </div>
    )
}
export default Profile