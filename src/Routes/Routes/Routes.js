import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Galary from "../../Pages/Galary/Galary";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Profile/Login/Login";
import Profile from "../../Pages/Profile/Profile/Profile";
import Signup from "../../Pages/Profile/Signup/Signup";
import Services from "../../Pages/Services/Services";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/services', element: <Services></Services> },
            { path: '/galary', element: <Galary></Galary> },
            { path: '/about', element: <About></About> },
            { path: '/login', element: <Login></Login> },
            { path: '/signup', element: <Signup></Signup> },
            { path: '/profile', element: <Profile></Profile> },
        ]
    }
])

export default router;