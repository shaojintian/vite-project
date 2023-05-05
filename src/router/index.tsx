import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import App from '../App.tsx'
import Home from '../views/Home.tsx'
import SubHome from "../views/SubHome.tsx";
const baseRouter = () =>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/" element={<Navigate to={"/home"}/>}></Route>
            </Route>
            <Route path="/" element={<Navigate to={"/home"}/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/subhome" element={<SubHome/>}></Route>

        </Routes>
    </BrowserRouter>
)

export default baseRouter;