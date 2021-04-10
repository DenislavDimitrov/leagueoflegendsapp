import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import login from '../../utils/login';
import UserContext from '../../Context';

import styles from './Login.module.css'
import { Link } from 'react-router-dom'

const LoginComponent = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const context = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await login(
      'http://localhost:3003/api/user/login',
      {
        username,
        password
      },
      (user) => {
        context.logIn(user);
        history.push(`/profile/${user.id}`);
      },
      (e) => {
        console.log(e);
        setErr('Something went wrong. Username or Password incorrect.')
        setTimeout(function () {
          setErr(false)
        }, 2000)
      }
    );
  };

  return (
    <div >
      <form className={styles.form} onSubmit={handleSubmit}>
        {err ? <span className={styles.errSpan}>{err}</span> : null}
        <div className={styles.container}>
          <h2 className={styles.input}>Login</h2>
          <label htmlFor="username"><b>Username:</b></label>
          <input className={styles.input} type="text" placeholder="Enter Username" name="username" required onChange={(e) => setUsername(e.target.value)} />

          <label htmlFor="password"><b>Password:</b></label>
          <input className={styles.input} type="password" placeholder="Enter password" name="password" required onChange={(e) => setPassword(e.target.value)} />

          <button className={styles.button} type="submit">Login</button>
          <Link className={styles.link} to="/register">No account yet? Register here.</Link>
        </div>
      </form>
    </div>
  )
}
export default LoginComponent