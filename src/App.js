import Login from "./Pages/Login";
import { Route,Routes } from "react-router-dom";
import NewAccount from "./Pages/NewAccount";
import TellUs from "./Pages/TellUs";
import Number from "./Pages/Number";
import ContentCopy from './Pages/contentpages/ContentCopy'
import Form from './Pages/contentpages/Form'

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
        {/* <Route path='/content' element={<Content/>} /> */}
        <Route path='/content' element={<ContentCopy/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
    
    );
}

export default App;
