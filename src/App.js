import Login from "./Pages/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import NewAccount from "./Pages/NewAccount";
import TellUs from "./Pages/TellUs";
import Number from "./Pages/Number";
import ContentCopy from './Pages/ContentCopy.jsx'
import Form from './Pages/Form.jsx'

import Auth from './Pages/Protected/Auth'

function App() {
  const isLoggedIn = !!localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/content" /> : <Login />} />
      <Route path='/newaccount' element={<NewAccount />} />
      <Route path='/telluseaboutyou' element={<TellUs />} />
      <Route path='/number' element={<Number />} />
      <Route path='/content' element={<Auth Component={ContentCopy} />} />
      <Route path='/form' element={<Auth Component={Form} />} />
    </Routes>

  );
}

export default App;
