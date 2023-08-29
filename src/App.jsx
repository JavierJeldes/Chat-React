import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="login" element= {<Login/>}/>
        <Route path="Register" element= {<Register/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    )
}

export default App;
