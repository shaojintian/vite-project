import { useState } from 'react'
import {Link, useRoutes} from "react-router-dom";
import routes from "./router/index_new.tsx";


function App() {
   const [count, setCount] = useState(0)
    const outlet = useRoutes(routes);
  return (
      <div className="App">
          <Link to={"/home"}>Home</Link> |
          <Link to={"/about"}>About</Link>
          {outlet}
          {/*other route occupation*/}
      </div>
  )
}

export default App
