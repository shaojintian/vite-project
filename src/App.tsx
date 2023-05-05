import { useState } from 'react'
import {Button} from "antd";
import {StepBackwardOutlined, UpCircleOutlined} from "@ant-design/icons";
import {Link, useRoutes} from "react-router-dom";
import routes from "./router/index_new.tsx";
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'

function App() {
   const [count, setCount] = useState(0)
    const outlet = useRoutes(routes);
  return (

      <div className="App">
          {outlet}
          <Button>fuck this button</Button>
          <StepBackwardOutlined style={{fontSize:'400px'}}/>
          <Link to={"/home"}>Home</Link>
          <Link to={"/subhome"}>SubHome</Link>
          <Comp1></Comp1>
          <Comp2></Comp2>
          <UpCircleOutlined style={{fontSize:'400px',color:'red'}}></UpCircleOutlined>
          {/*other route occupation*/}
      </div>
  )
}

export default App
