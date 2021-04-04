import styles from './Register.module.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import register from '../../services/register'

const RegisterComponent = ({
    history
}) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
    //todo validations
    e.preventDefault()
    register(username, password)
    .then(() => {
        history.push('/')
    })
}
    return (
        <div >
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.container}>
                    <h2 className={styles.input}>Register</h2>
                    <label htmlFor="username"><b>Username:</b></label>
                    <input className={styles.input} type="text" placeholder="Enter Username" name="username" required onChange={e => setUsername(e.target.value)}/>

                    <label htmlFor="password"><b>Password:</b></label>
                    <input className={styles.input} type="text" placeholder="Enter password" name="password" required onChange={e => setPassword(e.target.value)} />

                    <label htmlFor="rePassword"><b>Re-Password:</b></label>
                    <input className={styles.input} type="text" placeholder="Repeat password" name="rePassword" required />

                    <button className={styles.button} type="submit">Register</button>
                    <Link className={styles.link} to="/login">You already have an account? Login here.</Link>
                </div>
            </form>
        </div>
    )
}
export default RegisterComponent