import React, { useState } from 'react'




const App = () => {

    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount(count + 1)
    }

    const Decrement = () => {
        setCount(count - 1)
    }

    const Reset = () => {
        setCount(0)
    }
    return (
        <div>
            <div className="container">
                <div className="timercontainer"></div>
                <h3>Count: {count} </h3>
                <div className="btn-container">
                    <button onClick={Increment}>Increment</button>
                    <button onClick={Decrement}>Decrement</button>
                    <button onClick={Reset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default App
