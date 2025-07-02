import Header from "./Header"
import Home from "./Home"
import {Route , Routes} from "react-router"
function App() {
  return (
    <>
      <Routes>
        <Route path ='/' element={<Home />}></Route>
      </Routes>
      <Header></Header>
    </>
  )
}

export default App
