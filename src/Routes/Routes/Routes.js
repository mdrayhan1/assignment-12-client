import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AdvertisedItems from "../../Pages/AdvertisedItems/AdvertisedItems";
import Blogs from "../../Pages/Blogs/Blogs";
import EachWatches from "../../Pages/Home/EachWatches/EachWatches";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";


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
                path: '/signup',
                element: <SignUp></SignUp>

            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/advertiseditems',
                element: <AdvertisedItems></AdvertisedItems>
            },
            {
                path: "/products/:id",
                loader: async ({ params }) => {
                    return fetch(
                        `https://discover-watches-server.vercel.app/products/${params.id}`
                    );
                },
                element: <EachWatches></EachWatches>



            },
        ]
    }
])

