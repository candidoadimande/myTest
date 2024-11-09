import { useState, useEffect } from "react"
import AnimateHeight from 'react-animate-height'
import Blogs from "./Blogs"
import Drawer from "./Drawer"
import Search from "./Search"
import styled from "styled-components"

const MainStyles = styled.div`
  padding: 15px;
`;
export default function Main({blogs, setBlogs, isLoading, setisLoading, show}) {
  
  return (
    <MainStyles>
      <AnimateHeight
        id="example-panel"
        duration={500}
        height={show}
      >
        <Drawer/>
      </AnimateHeight>
      <Search 
        setBlogs={setBlogs}
        setisLoading={setisLoading}
      />
      <Blogs
        blogs={blogs}
        isLoading={isLoading}
      />
    </MainStyles>
  )
}