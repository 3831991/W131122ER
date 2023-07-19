import { useState } from 'react';
import './Range.css';

export default function Range({ title, value, min, max, change }) {
    const [num, setNum] = useState(value);

    function changeVal(ev) {
        setNum(+ev.target.value);
        change(num);
    }

    return (
        <div className="range">
            <b>{title}:</b>
            <input type="range" min={min} max={max} value={num} onChange={changeVal} />
            <input type="number" min={min} max={max} value={num} onChange={changeVal} />
        </div>
    )
}