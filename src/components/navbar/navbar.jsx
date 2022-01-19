import "./navbar.scss"
import {GitHub,} from "@material-ui/icons"
import { Link } from "@material-ui/core"



 export default function navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={" navbar " +  (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Madureira</a>
                    <div className="itemContainer">
                    <Link href="https://github.com/AntonioMadureira22">
                    <GitHub className="icon"/>
                    </Link>
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

