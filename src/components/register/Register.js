import styles from './Register.module.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import register from '../../utils/register'

const RegisterComponent = ({
    history
}) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [rePassword, setRePassword] = useState('');
const [err, setErr] = useState('');


const handleSubmit = async (e) => {
    
    e.preventDefault()
    if (password === rePassword){
        register(username, password)
        .then(() => {
            history.push('/login')
        })
    } else {
        setErr('Passwords dont match!')
        setTimeout(function () {
            setErr(false)
          }, 2000)
    }
    
}
    return (
        <div >
            <form className={styles.form} onSubmit={handleSubmit}>
        {err ? <span className={styles.errSpan}>{err}</span> : null}

                <div className={styles.container}>
                    <h2 className={styles.input}>Register</h2>
                    <label htmlFor="username"><b>Username:</b></label>
                    <input className={styles.input} type="text" placeholder="Enter Username" name="username" required onChange={e => setUsername(e.target.value)}/>

                    <label htmlFor="password"><b>Password:</b></label>
                    <input className={styles.input} type="password" placeholder="Enter password" name="password" required onChange={e => setPassword(e.target.value)} />

                    <label htmlFor="rePassword"><b>Re-Password:</b></label>
                    <input className={styles.input} type="password" placeholder="Repeat password" name="rePassword" required onChange={e => setRePassword(e.target.value)}/>

                    <button className={styles.button} type="submit">Register</button>
                    <Link className={styles.link} to="/login">You already have an account? Login here.</Link>
                </div>
            </form>
        </div>
    )
}
export default RegisterComponent