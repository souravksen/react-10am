import React, { useState, useMemo } from 'react'

const UseMemoHook = () => {
    const [count, setCount] = useState(0)

    const expensiveCalculation = useMemo(() => {
        let sum = 0
        for (let i = 1; i <= 1000000000; i++) {
            sum += i
        }
        return sum
    }, [])

    return (
        <div>
            <h1>UseMemo</h1>
            <h1 className='text-5xl'>{count}</h1>
            <button 
                className='p-5 bg-amber-400 cursor-pointer'
                onClick={() => setCount(count + 1)}
            >
                Click
            </button>
        </div>
    )
}

export default UseMemoHook