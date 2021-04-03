import styles from './HeroSection.module.css'
import backgroundVideo from "../../public/video.mp4"

function Home(){
    return (
        <div className={styles.container}>
            <video className={styles.video} src={backgroundVideo} autoPlay loop muted type="video/mp4" />
            <div className={styles.box}>
            <h1>Greetings, Summoner</h1>
                There is an adventure ahead of you.
                Are you ready?
            </div>
            <button className={styles.btn}>
                {/* to add path to register */}
                Ready
            </button>
        </div>
    )
}

export default Home