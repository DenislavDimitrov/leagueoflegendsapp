import { Switch, Route } from 'react-router-dom'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Store from './components/store/Store'

import Create from './components/create/Create'
import Profile from './components/profile/Profile'
import ChampionDetails from './components/champions/ChampionDetails'

const Navigation = () => {
    return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/store" component={Store} />
                <Route path="/create" component={Create} />
                <Route path="/profile/:userid" component={Profile} />
                <Route path="/details/:championid" component={ChampionDetails} />

            </Switch>
    )
}
export default Navigation