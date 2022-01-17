import "./menu.scss"
import Pdf from "../../docs/resume.pdf";

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        /*when menu opens color changes set to true */
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">About Me</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={Pdf}>Resume</a>
                </li>
            </ul>
        </div>
    )
}
