import styles from './ErrorComponent.module.css'

const ErrorComponent = () => {
    return (
        <div className={styles.background}>
            <strong className={styles.strong}>Oooops.... Something went wrong! Go back.</strong>
        </div>
    )
}

export default ErrorComponent