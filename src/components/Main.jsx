import { useState, useEffect } from "react"
import Blogs from "./Blogs"
import Search from "./Search"
import styled from "styled-components"

const MainStyles = styled.div`
  padding: 15px;
`;
export default function Main() {
  return (
    <MainStyles>
      <Search />
      <Blogs/>
    </MainStyles>
  )
}