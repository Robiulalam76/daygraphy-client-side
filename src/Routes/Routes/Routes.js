import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blogs from "../../Pages/Blogs/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import MyReview from "../../Pages/MyReview/MyReview/MyReview";
import Login from "../../Pages/Profile/Login/Login";
import Profile from "../../Pages/Profile/Profile/Profile";
import Signup from "../../Pages/Profile/Signup/Signup";
import AddService from "../../Pages/Services/AddService/AddService";
import OrderReq from "../../Pages/Services/ServiceDetails/OrderReq/OrderReq";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services/Services";
import PriveteRoute from "../PriveteRoute/PriveteRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/latest-services/'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: () => fetch('http://localhost:5000/latest-services/'),
                element: <Home></Home>
            },
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
            {
                path: '/services/order-request/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <PriveteRoute><OrderReq></OrderReq></PriveteRoute>
            },
            {
                path: '/add-service',
                element: <PriveteRoute><AddService></AddService></PriveteRoute>
            },
            {
                path: '/my-review',
                element: <PriveteRoute><MyReview></MyReview></PriveteRoute>
            },
            { path: '/about', element: <About></About> },
            { path: '/blogs', element: <Blogs></Blogs> },
            { path: '/login', element: <Login></Login> },
            { path: '/signup', element: <Signup></Signup> },
            { path: '/profile', element: <PriveteRoute><Profile></Profile></PriveteRoute> },
        ]
    }
])

export default router;