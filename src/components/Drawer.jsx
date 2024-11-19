import styled from "styled-components"
import { Link } from "react-router-dom"
const DrawerList = styled.ul`
  width: 250px;
  margin: 0 auto;
  
  li {
    margin: 15px 0;
    color: white;
    opacity: 0.8;
    width: 100px;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Chip = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
  height: 26px;
  background: #DAA520;
  border-radius: 50px;
  position: relative;
  p {
    color: white;
    padding: 5px;
    letter-spacing: 1.2px;
    font-size: 13px;
    margin-left: 6px;
  }
  
  img {
    border-radius: 50px;
    width: 40px;
    border: 3px solid #DAA520;
    margin-left: 5px;
    margin-bottom: 0;
    
  }
`;

const Avatar = styled.div`
    position: absolute;
    right: -4%;
    bottom: -5px;
`;
import profilePic from "./Images/images.jpeg"
export default function Drawer() {
  return (
    <div>
      <DrawerList>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/IdiomPage">
          <li>Idiomas</li>
        </Link>
        <li>Info</li>
      </DrawerList>
      <Row>
      <div></div>
      <Chip>
        <p>John Sitoe</p>
        <Avatar>
          <img src={profilePic} alt="g"/>
        </Avatar>
      </Chip>
      </Row>
    </div>
  )
}