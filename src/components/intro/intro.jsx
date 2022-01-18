import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from 'react';

export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, { 
            backDelay: 1500,
            backspeed: 50,
            showCursor: true, 
            strings: ['Full-stack Developer', 'Content Creator' ] 
        });
    
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainter">
                    <img src="images/antonio 1 (1).png" alt="person" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h2>Welcome to my Portfolio</h2>
                <h1>My name is, Antonio Madureira</h1>
                <h3>Software Engineer<span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                <button>More Info</button>
                </a>
            </div>
        </div>
    )
}
