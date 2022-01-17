import "./navbar.scss"
import {Email} from "@material-ui/icons"


 export default function navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Madureira</a>
                    <div className="itemContainer">
                    <Email className="icon"/>
                    <span>antonio.madureira2222@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

