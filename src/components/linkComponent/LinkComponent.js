import styles from "./LinkComponent.module.css"
import {Link} from 'react-router-dom'

const LinkComponent = ({ title, href }) => {
    //to add links file
    return (
        <li className={styles.listItem}>
            <Link to={href} className={styles["header-link"]} >
                {title}
            </Link>
        </li>
    )
}

export default LinkComponent