import Header from "./Header"
import Home from "./Home"
import {Route , Routes} from "react-router"
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path ='/' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
