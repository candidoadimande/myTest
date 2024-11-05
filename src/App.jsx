import { useState, useEffect } from 'react'
import Search from "./components/Search"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {
  const [blogs, setBlogs] = useState("");
  const [isLoading, setisLoading] = useState(true)
    const [show, setShow] = useState(false)
  return (
    <div>
    <Header show={show} setShow={setShow}/>
    <Search
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
