import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
    },
    {
        path: 'category/:id',
        element: <h2>hello</h2>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
    }
])

export default Routes;