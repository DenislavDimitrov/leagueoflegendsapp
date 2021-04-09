import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../Context';

const isAuth = (InnerComponent) => {

    const Component = (props) => {
        const { user } = useContext(UserContext);
        const history = useHistory();
        
        if (!user.loggedIn) {
            history.push('/login')
            return null;
        }

        return <InnerComponent {...props} />
    }

    return Component;
};

export default isAuth;