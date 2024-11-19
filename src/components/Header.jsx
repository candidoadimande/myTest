import {  useState, useEffect } from "react";
import * as eva from "eva-icons";
import styled from "styled-components";
import AnimateHeight from 'react-animate-height';
import Drawer from "./Drawer";
const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  
  nav {
    display: flex;
`;
const Logo = styled.div`
  color: white;
  font-family: cursive;
  font-size: 25px;
  font-weight: bold;
  line-height: 0.6em;
  text-shadow: 0 1px 2px rgb(0,0,0,0.3);
  
  .do {
    font-size: 18px;
    color: #DAA520;
    font-family: Sans-serif;
  }
`;

const Avatar = styled.div`
  margin-right: 15px;
  img {
    width: 35px;
    border: 2px solid #DAA520;
    border-radius: 50px;
  }
`;
const Button = styled.button`
  background: none;
  border: 0;
`;
import profilePic from "./Images/images.jpeg"
export default function Header() {
  const [show, setShow] = useState(0);
  useEffect(() => {
    eva.replace();
  }, []);
  
  return (
    <div>
    <HeaderStyles>
      <Logo>Fale <strong className="do">do</strong> <br></br> jeito certo
      </Logo>
      <nav>
        <ul>
          <Avatar>
            <img src={profilePic} />
          </Avatar>
          <Button
            aria-expanded={show !== 0}
              aria-controls="example-panel"
              onClick={() => setShow(show === 0 ? 'auto' : 0)}
          >
              <i 
                data-eva-fill="white"
                data-eva="menu" 
                data-eva-height="20px"
              />
          </Button>
        </ul>
      </nav>
    </HeaderStyles>
   <AnimateHeight
        id="example-panel"
        duration={500}
        height={show}
      >
        <Drawer/>
    </AnimateHeight>
  </div>
  )
}