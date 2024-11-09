import { useEffect } from "react"
import * as eva from "eva-icons";
import styled from "styled-components";
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
  line-height: 0.6em;
  text-shadow: 0 1px 3px rgb(0,0,0,0.5);
  
  .do {
    font-size: 18px;
    color: #DAA520;
    font-family: Sans-serif;
  }
`;
const Chip = styled.div`
  background: #DAA520;
  border-radius: 50px;
  padding: 4px;
  margin-right: 5px;
  color: #fff;
  font-family: cursive;
  font-size: 18px;
`;
const Button = styled.button`
  background: none;
  border: 0;
`;

export default function Header({setShow, show}) {
  useEffect(() => {
    eva.replace();
  }, []);
  
  return (
    <HeaderStyles>
      <Logo>Fale <strong className="do">do</strong> <br></br> jeito certo
      </Logo>
      <nav>
        <ul>
          <Chip>
            Olá John
          </Chip>
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
  )
}