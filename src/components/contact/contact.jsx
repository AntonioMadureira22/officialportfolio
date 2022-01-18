import "./contact.scss"
import Link from "@material-ui/core/Link"
import { GitHub, LinkedIn } from "@material-ui/icons"

export default function contact() {
    return (
        <div className="contact" id="contact">
            <div className="itemContainer">
                <Link className="icon"
                    href="https://github.com/AntonioMadureira22">
                    <GitHub />
                </Link>
                <Link className="icon"
                    href="https://www.linkedin.com/in/antonio-madureira-a6b806191/">
                    <LinkedIn />
                </Link>


            </div>
        </div>

    )
}
