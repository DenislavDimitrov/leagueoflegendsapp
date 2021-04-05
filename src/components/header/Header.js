import {useContext} from 'react';

import styles from './Header.module.css'
import LinkComponent from '../linkComponent/LinkComponent'
import getNavigation from '../../utils/navLinks'
import UserContext from '../../Context'

const Header = () => {
    const {user} = useContext(UserContext)
    const links = getNavigation(user)
   
    return (
      
        <header className={styles.nav}>
            <ul>
               
              {
                  links.map(nav => {
                      return (
                        <LinkComponent key={nav.title} href={nav.link} title={nav.title} type='header'/>
                      )
                  })
              }
            </ul>
        </header>
       
    )
}
export default Header