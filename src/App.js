import Login from "./Pages/Login";
import { Route,Routes } from "react-router-dom";
import NewAccount from "./Pages/NewAccount";
import TellUs from "./Pages/TellUs";
import Number from "./Pages/Number";
import Sidebar from "./Pages/componet/Sidebar";
import Navbar from "./Pages/componet/Navbar";
import Content from "./Pages/ContentPages/Content";

function App() {
  return (
    <div className="wrapper">
      <Content/>
    </div>
      // <Routes>
      //   <Route path="/" element={<Login/>} />
      //   <Route path='/NewAccount' element={<NewAccount/>} />
      //   <Route path='/TellUsAboutYou' element={<TellUs/>} />
      //   <Route path='/Number' element={<Number/>} />
      //   {/* <Route path='/Number' element={<Content/>} /> */}
      // </Routes>
    
    );
}

export default App;
