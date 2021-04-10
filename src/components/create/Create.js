import styles from './Create.module.css'

import { useState } from 'react'
import getCookie from '../../utils/cookie'
import getChamps from '../../utils/champs'

const Create = ({
  history
}) => {
  const [name, setName] = useState(null);
  const [type, setType] = useState(null);
  const [err, setErr] = useState(false);

  const champs = getChamps()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (name && type) {
      await fetch('http://localhost:3003/api/champions', {
        method: 'POST',
        body: JSON.stringify({
          name,
          type
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getCookie('x-auth-token')
        }
      });
      history.push('/')
    } else {
      setErr('Please, select type!')
      setTimeout(function () {
        setErr(false)
      }, 2000)
    }
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        {err ? <span className={styles.errSpan}>{err}</span> : null}
        <div className={styles.container}>
          <h2 className={styles.input}>Create your Champion</h2>
          <label htmlFor="name"><b>Name:</b></label>
          <input className={styles.input} type="text" placeholder="Enter Name" name="name" required onChange={e => setName(e.target.value)} />

          <label htmlFor="type"><b>Type:</b></label>
          <select onChange={e => setType(e.target.value)}>
            <option defaultValue=""></option>
            <option value="Marksman">Marksman</option>
            <option value="Mage">Mage</option>
            <option value="Tank">Tank</option>
            <option value="Assassin">Assassin</option>
            <option value="Fighter">Fighter</option>
          </select>
          <button className={styles.button} type="submit">Create</button>
        </div>
      </form>

      <div className={styles.ul}>
        <ul >
          {
            champs.map(champ => {
              return (
                <li className={styles.li}>
                  <div className={styles.img}>
                    <img className={styles.pic} src={champ.src} alt='Item' />
                    <h1 className={styles.text}>
                      {champ.type}
              </h1 >
                    <p className={styles.text}>
                      {champ.text}
              </p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
export default Create