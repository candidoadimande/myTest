import {useState, useEffect} from "react"
import * as eva from "eva-icons";
const URL = "http://localhost:8000/blogs"

import styled  from "styled-components"

const Form = styled.form`
  background: rgb(0,0,0,0.4);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 250px;
  padding: 8px;
  border-radius: 50px;
  
  input {
    background: transparent;
    border: 0;
    outline: none;
    color: #fff;
  }
  button {
    background: none;
    border: 0;
  }

`;
export default function Search({setisLoading, setBlogs}) {
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
    <Form>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquise"
      />
      <button>
        <i 
          data-eva="search"
          data-eva-height="20px"
          data-eva-fill="white "
        />
      </button>
    </Form>
  )
}