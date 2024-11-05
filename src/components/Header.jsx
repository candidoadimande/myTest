import { useEffect } from "react"
import * as eva from "eva-icons";
export default function Header({setShow, show}) {
  useEffect(() => {
    // add this line
    eva.replace();
  }, []);
  
  return (
    <div className="header">
      <div className="logo" >
        <p className="logo-title" >Fale <strong className="do">do</strong> <br></br> jeito certo</p>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li><button>Menu</button></li>
            <li>
              <button onClick={() => setShow(!show)}>
                <i data-eva="menu"/>
              </button>
            </li>
          </ul>
      </nav>
    </div>
  )
}