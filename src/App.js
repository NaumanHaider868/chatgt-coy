import Login from "./Pages/Login";
import { Route,Routes } from "react-router-dom";
import NewAccount from "./Pages/NewAccount";
import TellUs from "./Pages/TellUs";
import Number from "./Pages/Number";
import Content from "./Pages/ContentPages/Content";

function App() {
  return (
    // <div className="wrapper">
    //   <Content/>
    // </div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/newaccount' element={<NewAccount/>} />
        <Route path='/telluseaboutyou' element={<TellUs/>} />
        <Route path='/number' element={<Number/>} />
        <Route path='/content' element={<Content/>} />
      </Routes>
    
    );
}

export default App;
