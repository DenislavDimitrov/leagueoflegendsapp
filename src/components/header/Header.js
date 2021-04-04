import {useContext} from 'react';

import styles from './Navbar.module.css'
import LinkComponent from '../link/LinkComponent'
import getNavigation from '../../utils/navigation'
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