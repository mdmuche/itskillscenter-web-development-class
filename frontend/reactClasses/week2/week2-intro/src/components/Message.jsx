import { useEffect, useState } from 'react'

function Message() {
    const [message, setMessage] = useState('');

    useEffect(() => {
       console.log('Component mounted');
       setMessage('Welcome to UseEffect!');
    }, []) //? the [] signifies that it should run only once

    return (
        <div>{message}</div>
    )
}

export default Message