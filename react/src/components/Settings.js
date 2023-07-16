import './Settings.css';
import { useState } from "react";

export default function Settings() {
    const [brightness, setBrightness] = useState(100);
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [fontSize, setFontSize] = useState(16);
    const [padding, setPadding] = useState(5);
    const [invertColor, setInvertColor] = useState(0);

    function changeBrightness(ev) {
        setBrightness(ev.target.value);
        document.querySelector('html').style.filter = `invert(${invertColor}%) brightness(${brightness}%)`;
    }

    function changeLetterSpacing(ev) {
        setLetterSpacing(ev.target.value);
        document.body.style.letterSpacing = `${letterSpacing}px`;
    }

    function changeFontSize(ev) {
        setFontSize(ev.target.value);
        document.body.style.fontSize = `${fontSize}px`;
    }

    function changePadding(ev) {
        setPadding(ev.target.value);
        document.body.style.padding = `${padding}px`;
    }

    function changeInvertColor(ev) {
        setInvertColor(ev.target.value);
        document.querySelector('html').style.filter = `invert(${invertColor}%) brightness(${brightness}%)`;
    }

    return (
        <div className="Settings">
            <div className="range">
                <b>בהירות:</b>
                <input type="range" min={10} max={100} value={brightness} onChange={changeBrightness} />
                <input type="number" min={10} max={100} value={brightness} onChange={changeBrightness} />
            </div>

            <div className="range">
                <b>ריווח בין תווים:</b>
                <input type="range" min={0} max={10} value={letterSpacing} onChange={changeLetterSpacing} />
                <input type="number" min={0} max={10} value={letterSpacing} onChange={changeLetterSpacing} />
            </div>

            <div className="range">
                <b>גודל הגופן:</b>
                <input type="range" min={10} max={30} value={fontSize} onChange={changeFontSize} />
                <input type="number" min={10} max={30} value={fontSize} onChange={changeFontSize} />
            </div>

            <div className="range">
                <b>ריווח של הדף:</b>
                <input type="range" min={0} max={40} value={padding} onChange={changePadding} />
                <input type="number" min={0} max={40} value={padding} onChange={changePadding} />
            </div>

            <div className="range">
                <b>היפוך צבעים:</b>
                <input type="range" min={0} max={100} value={invertColor} onChange={changeInvertColor} />
                <input type="number" min={0} max={100} value={invertColor} onChange={changeInvertColor} />
            </div>
        </div>
    )
}