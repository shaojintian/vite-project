import {lazy} from "react";
import {Navigate} from "react-router-dom";
import React from "react";

const Home = lazy(()=>import("../views/Home.tsx"))
const SubHome = lazy(()=>import("../views/SubHome.tsx"))

const withLoadingComponent = (comp:JSX.Element)=>(
    <React.Suspense fallback={<p>loading</p>}>
        {comp}
    </React.Suspense>
)

const routes = [
    {
        path:"/",
        element:<Navigate to={"/home"}></Navigate>
    },
    {
        path:"/home",
        element: <Home/>
    },
    {
        path:"/about",
        element:
            withLoadingComponent(<SubHome/>)
    }
]

export default routes