import { useCallback, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Profile.module.css'
import Champions from './Champions'
import UserContext from '..//../Context'

const Profile = () => {
    const [champions, setChampions] = useState([])
    const { user } = useContext(UserContext)
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
                <ul key={champion._id} className={styles.items}>
                    <Champions
                        src={champion.imageUrl}
                        text={champion.name}
                        level={champion.level}
                        label={champion.type}
                        path={`/details/${champion._id}`}
                    />
                </ul>
            )
        })
    }


    return (
        <div className={styles.form}>
            <h1 className={styles.h1}>Hello, {user.username}! </h1>
            <p className={styles.h1}>Here is your collection of champions. </p>
            <p className={styles.h1}>You can choose which one you want to play with and either fight or forge new items. </p>
            <div className={styles.itemsContainer}>
                <div className={styles.itemsWrapper}>
                    {renderChampions()}

                </div>
            </div>
        </div>
    )
}
export default Profile