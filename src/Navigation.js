import { Switch, Route } from 'react-router-dom'
import About from './about/About'
import Contact from './contact/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './register/Register'
import Store from './store/Store'
import Forge from './forge/Forge'
import Create from './create/Create'
import Profile from './profile/Profile'
import ChampionDetails from './champions/ChampionDetails'

const Navigation = () => {
    return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/store" component={Store} />
                <Route path="/forge" component={Forge} />
                <Route path="/create" component={Create} />
                <Route path="/profile/:userid" component={Profile} />
                <Route path="/details/:championid" component={ChampionDetails} />

            </Switch>
    )
}
export default Navigation