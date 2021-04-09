import { Switch, Route, useHistory } from 'react-router-dom'
import {useContext} from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Ranking from './components/ranking/Ranking'
import Create from './components/create/Create'
import Profile from './components/profile/Profile'
import ChampionDetails from './components/champions/ChampionDetails'
import UserContext from './Context'
import isAuth from './hoc/authentication'

const Navigation = () => {
    const context = useContext(UserContext)
    const history = useHistory()
    return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/ranking" component={isAuth(Ranking)} />
                <Route path="/create" component={isAuth(Create)} />
                <Route path="/logout" render = {() => {
                    context.logOut()
                    history.push('/')
                }} />
                <Route path="/profile/:userid" component={isAuth(Profile)} />
                <Route path="/details/:championid" component={isAuth(ChampionDetails)} />

            </Switch>
    )
}
export default Navigation