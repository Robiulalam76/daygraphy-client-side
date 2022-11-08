import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blogs from "../../Pages/Blogs/Blogs/Blogs";
import Galary from "../../Pages/Galary/Galary";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Profile/Login/Login";
import Profile from "../../Pages/Profile/Profile/Profile";
import Signup from "../../Pages/Profile/Signup/Signup";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services/Services";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/services/'),
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            { path: '/galary', element: <Galary></Galary> },
            { path: '/about', element: <About></About> },
            { path: '/blogs', element: <Blogs></Blogs> },
            { path: '/login', element: <Login></Login> },
            { path: '/signup', element: <Signup></Signup> },
            { path: '/profile', element: <Profile></Profile> },
        ]
    }
])

export default router;