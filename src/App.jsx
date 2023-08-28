import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<Home/>}></Route>
        <Route path="login" element= {<Login/>}></Route>
        <Route path="Register" element= {<Register/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    )
}

export default App;
