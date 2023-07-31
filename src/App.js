import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import NewAccount from "./pages/NewAccount";
import TellUs from "./pages/TellUs";
import Number from "./pages/Number";
import ContentCopy from './pages/contentpages/ContentCopy.jsx'
import Form from './pages/contentpages/Form.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/newaccount' element={<NewAccount />} />
      <Route path='/telluseaboutyou' element={<TellUs />} />
      <Route path='/number' element={<Number />} />
      <Route path='/content' element={<ContentCopy />} />
      <Route path='/form' element={<Form />} />
    </Routes>

  );
}

export default App;
