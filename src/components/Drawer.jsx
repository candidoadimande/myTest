import styled from "styled-components"
const DrawerList = styled.ul`
  width: 250px;
  margin: 0 auto;
  
  li {
    margin-bottom: 15px;
    color: white;
    opacity: 0.8;
  }
`;
const Chip = styled.div`
  display: flex;
  width: 50%;
  margin: 15px;
  padding: 7px;
  border-radius: 50px;
  
  p {
    color: gold;
  }
  
  img {
    margin-left: 10px;
    border-radius: 50px;
  }
`;

export default function Drawer() {
  return (
    <div>
      <DrawerList>
        <li>Home</li>
        <li>Gramática</li>
        <li>Idiomas</li>
        <li>Info</li>
      </DrawerList>
      <Chip>
        <p>John Sitoe</p>
        <img src="" alt="g"/>
      </Chip>
    </div>
  )
}