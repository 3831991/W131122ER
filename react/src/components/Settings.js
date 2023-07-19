import Range from './Range';
import './Settings.css';
import { useState } from "react";

export default function Settings() {
    const [brightness, setBrightness] = useState(100);
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [fontSize, setFontSize] = useState(16);
    const [padding, setPadding] = useState(5);
    const [invertColor, setInvertColor] = useState(0);

    function setFilter() {
        document.querySelector('html').style.filter = `invert(${invertColor}%) brightness(${brightness}%)`;
    }

    function changeBrightness(num) {
        setBrightness(num);
        setFilter();
    }

    function changeLetterSpacing(num) {
        setLetterSpacing(num);
        document.body.style.letterSpacing = `${letterSpacing}px`;
    }

    function changeFontSize(num) {
        setFontSize(num);
        document.body.style.fontSize = `${fontSize}px`;
    }

    function changePadding(num) {
        setPadding(num);
        document.body.style.padding = `${padding}px`;
    }

    function changeInvertColor(num) {
        setInvertColor(num);
        setFilter();
    }

    return (
        <div className="Settings">
            <Range 
                title="בהירות"
                value={brightness}
                min={10}
                max={100}
                change={changeBrightness}
            />

            <Range 
                title="ריווח בין תווים"
                value={letterSpacing}
                min={0}
                max={10}
                change={changeLetterSpacing}
            />

            <Range 
                title="גודל הגופן"
                value={fontSize}
                min={10}
                max={30}
                change={changeFontSize}
            />

            <Range 
                title="ריווח של הדף"
                value={padding}
                min={0}
                max={40}
                change={changePadding}
            />

            <Range 
                title="היפוך צבעים"
                value={invertColor}
                min={0}
                max={100}
                change={changeInvertColor}
            />
        </div>
    )
}