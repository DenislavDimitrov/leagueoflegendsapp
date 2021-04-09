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
            title: "Ranking",
                link: "/ranking"
        },
        {
            title: "Create",
                link: "/create"
        },
    
        {
            title: "Logout",
                link: "/logout"
        },
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