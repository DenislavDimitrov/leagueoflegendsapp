import styles from './Contact.module.css'
import { Link } from 'react-router-dom'
import picture from '../../public/denislav.jpg'

const Contact = () => {
    return (
        <div className={styles['about-section']}>
            <h1>About Us Page</h1>
            <p>This is my first React Project.</p>
            <p>It is a web game, based on my favorite PC Game - League of Legends</p>
            <div >
                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src={picture} alt="DDD"  />
                        <div >
                            <h2>Denislav Dimitrov</h2>
                            <p className={styles.title}>Future Junior Web Developer</p>
                            <p>I am currently in JS Web, working with React.</p>
                            <p>ddimitrov92@abv.bg</p>
                            <Link to="/contact"><button className={styles.button}>Contact</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Contact