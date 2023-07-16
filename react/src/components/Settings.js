import './Settings.css';
import { useState } from "react";

export default function Settings() {
    const [brightness, setBrightness] = useState(55);

    function changeBrightness(ev) {
        setBrightness(ev.target.value);
        document.querySelector('html').style.filter = `brightness(${brightness}%)`;
    }

    return (
        <div className="Settings">
            <div className="range">
                <b>בהירות:</b>
                <input type="range" min={10} max={100} value={brightness} onChange={changeBrightness} />
                <input type="number" min={10} max={100} value={brightness} onChange={changeBrightness} />
            </div>
        </div>
    )
}

// ריווח בין תווים
// גודל הגופן
// ריווח של הדף
// היפוך צבעים