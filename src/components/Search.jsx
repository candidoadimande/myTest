import { useState, useEffect } from "react"
import * as eva from "eva-icons";
const URL = "http://localhost:8000/blogs"
import Home from "./Home"
import Drawer from "./Drawer"
export default function Search({blogs, setBlogs, isLoading, setisLoading, show}) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchBlog() {
      const res = await fetch(URL)
      const data = await res.json();
      setBlogs(data);
      setisLoading(false);
    }
    fetchBlog();
  }, []);
  useEffect(() => {
    // add this line
    eva.replace();
  }, []);
  return (
    <div>
     {show && <Drawer/>}
      <div className="searchContainer">
        <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquise"
        />
        <button
          data-eva="search"
          data-eva-height="20px"
        />
      </div>
      <Home
          blogs={blogs}
          isLoading={isLoading}
          query={query} 
      />
    </div>
  )
}