import { useState, useEffect } from 'react'
import Main from "./components/Main"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {
  const [blogs, setBlogs] = useState("");
  const [isLoading, setisLoading] = useState(true)
    const [show, setShow] = useState(0)
  return (
    <div>
    <Header show={show} setShow={setShow}/>
    <Main
        show={show}
        setBlogs={setBlogs} setisLoading={setisLoading}
        blogs={blogs}
        isLoading={isLoading}
      />
      <Footer/>
    </div>
  )
}

export default App;
