import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import News from "../Components/News";
import Home from "../pages/Home";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
    },
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: "",
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: '/category/:id',
                element: <News/>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    
])

export default Routes;