import "./navbar.scss"
import {Email} from "@material-ui/icons"


 export default function navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={" navbar " +  (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Madureira</a>
                    <div className="itemContainer">
                    <Email className="icon"/>
                    <span>antonio.madureira2222@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

