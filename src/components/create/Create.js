import styles from './Create.module.css'

import { useState } from 'react'
import getCookie from '../../utils/cookie'

const Create = ({
    history
}) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
      
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
  
      };
    return (
        <div >
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.container}>
                    <h2 className={styles.input}>Create your Champion</h2>
                    <label htmlFor="name"><b>Name:</b></label>
                    <input className={styles.input} type="text" placeholder="Enter Name" name="name" required onChange={e => setName(e.target.value)} />

                    <label htmlFor="type"><b>Type:</b></label>
                    <select onChange={e => setType(e.target.value)}>
                        <option value="mage">Mage</option>
                        <option value="tank">Tank</option>
                        <option defaultValue="marksman">Marksman</option>
                        <option value="Assassin">Assassin</option>
                        <option value="Fighter">Fighter</option>
                    </select>

                    <button className={styles.button} type="submit">Create</button>

                </div>
            </form>
        </div>
    )
}
export default Create