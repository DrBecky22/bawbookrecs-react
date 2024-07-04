import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="card">
            <h3>Click to log your visit</h3>
            <button 
                onClick={() => setCount((count) => count + 1)}    
            >
                visit # {count}
            </button>
      </div>
    )
}

export default Counter;