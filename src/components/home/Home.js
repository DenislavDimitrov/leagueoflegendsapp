import styles from './Home.module.css'
import backgroundVideo from "../../public/video.mp4"
import {Link} from 'react-router-dom'
import UserContext from '..//../Context'
import {useContext} from 'react'

function Home(){
    const {user} = useContext(UserContext)
  
    return (
        <div className={styles.container}>
            <video className={styles.video} src={backgroundVideo} autoPlay loop muted type="video/mp4" />
            <div className={styles.box}>
            <h1>Greetings, Summoner</h1>
                There is an adventure ahead of you.
                Are you ready?
            </div>
            { !user.loggedIn ? 
                <Link to='/register' className={styles.btn}>
                Ready
            </Link>
            :
            null
            }
            
        </div>
    )
}

export default Home