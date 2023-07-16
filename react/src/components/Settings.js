import './Settings.css';
import { useState } from "react";

export default function Settings() {
    const [brightness, setBrightness] = useState(55);

    return (
        <div className="Settings">
            <div className="range">
                <b>בהירות:</b>
                <input type="range" min={10} max={100} value={brightness} onChange={ev => setBrightness(ev.target.value)} />
                <input type="number" min={10} max={100} value={brightness} onChange={ev => setBrightness(ev.target.value)} />
            </div>
        </div>
    )
}