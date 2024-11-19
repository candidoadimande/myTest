import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./components/Main"
import Header from "./components/Header"
import Blogdetails from "./components/Blogdetails"
import IdiomPage from "./components/IdiomPage"
import Footer from "./components/Footer"
function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={
              <Main/>
            }
          />
         <Route path="/blogs/:id"
            element={
              <Blogdetails/>
            }
          />
          <Route path="/IdiomPage" element={
              <IdiomPage/>
            }
          />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
