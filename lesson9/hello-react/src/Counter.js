import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>{count}</p>
        </div>
    );
}

export default Counter;