import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Pages/dashboard"
import { Signup } from "./components/Pages/signup"
import { Signin } from "./components/Pages/signin"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/home" element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>
}
export default App
