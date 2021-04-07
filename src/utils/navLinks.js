const getNavigation = (user) => {
    const authLinks = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Profile",
                link: `/profile/${user && user.id}`
        },
    
        {
            title: "Store",
                link: "/store"
        },
    
        {
            title: "Forge",
                link: "/forge"
        },
        {
            title: "Create",
                link: "/create"
        }
        
    ]
    const guestLinks = [
        {
            title: "Home",
            link: "/home"
        },
        {
            title: "Register",
            link: "/register"
        },
        {
            title: "Login",
            link: "/login"
        },
        {
            title: "About",
            link: "/about"
        },
    ]
    
const loggedIn = user && user.loggedIn; 
return loggedIn ? authLinks : guestLinks;

}

export default getNavigation