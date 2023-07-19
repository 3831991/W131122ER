import Range from './Range';
import './Settings.css';
import { useState } from "react";

export default function Settings2() {
    const [settings, setSettings] = useState({
        brightness: 100,
        letterSpacing: 0,
        fontSize: 16,
        padding: 5,
        invertColor: 0,
    });

    function setParams(key, val) {
        

        document.querySelector('html').style.filter = `invert(${settings.invertColor}%) brightness(${settings.brightness}%)`;
        document.body.style.letterSpacing = `${settings.letterSpacing}px`;
        document.body.style.fontSize = `${settings.fontSize}px`;
        document.body.style.padding = `${settings.padding}px`;
    }

    return (
        <div className="Settings">
            <Range 
                title="בהירות"
                value={settings.brightness}
                min={10}
                max={100}
                change={val => setParams('brightness', val)}
            />

            <Range 
                title="ריווח בין תווים"
                value={settings.letterSpacing}
                min={0}
                max={10}
                change={val => setParams('letterSpacing', val)}
            />

            <Range 
                title="גודל הגופן"
                value={settings.fontSize}
                min={10}
                max={30}
                change={val => setParams('fontSize', val)}
            />

            <Range 
                title="ריווח של הדף"
                value={settings.padding}
                min={0}
                max={40}
                change={val => setParams('padding', val)}
            />

            <Range 
                title="היפוך צבעים"
                value={settings.invertColor}
                min={0}
                max={100}
                change={val => setParams('invertColor', val)}
            />
        </div>
    )
}