import "./portfolio.scss"

export default function portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Work</li>
                <li>Content</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="images/react logo.png" alt="" />
                    <h3>banking</h3>
                </div>
                <div className="item">
                    <img src="images/react logo.png" alt="" />
                    <h3>banking</h3>
                </div>
                <div className="item">
                    <img src="images/react logo.png" alt="" />
                    <h3>banking</h3>
                </div>
                <div className="item">
                    <img src="images/react logo.png" alt="" />
                    <h3>banking</h3>
                </div>
            </div>
        </div>
    )
}
