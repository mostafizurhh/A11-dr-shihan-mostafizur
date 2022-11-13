import { createBrowserRouter } from "react-router-dom";
import Home from '../../pages/Home/Home'
import Main from '../../layout/Main/Main';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import TermsAndConditions from '../../termsAndConditions/TermsAndConditions';
import Blog from '../../pages/Blog/Blog'
import Services from '../../pages/Services/Services'
import Service from "../../pages/Services/Service";
import MyReview from '../../pages/MyReview/MyReview';
import AddService from '../../pages/AddService/AddService';
import PrivateRoutes from './PrivateRoutes';
import AddAReview from "../../pages/MyReview/AddAReview";
import About from "../../pages/About/About";
import EditReview from "../../pages/MyReview/EditReview";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <Service></Service>,
                loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/addareview/:id',
                element: <PrivateRoute><AddAReview></AddAReview></PrivateRoute>,
                loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path: '/editreview/:id',
                element: <EditReview></EditReview>,
                loader: async ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])