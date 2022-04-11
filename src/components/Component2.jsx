import React from 'react';
import Text2 from './Text2'
import Button2 from './Button2';

function Component2 () {
    const [count, setCount] = React.useState(0)
    const [count2, setCount2] = React.useState(0);
    console.log('Component-2 re-render');

    const handleClickCount = React.useCallback(() => {
        console.log('Component-2 handlerClick re-render')
        setCount(count +1);
    },[count, setCount])

    const handleClickCount2 = () => {
        setCount2(count2 + 1);
    }
    
    return <div style={{border: '1px solid black', margin: 8, padding: 16, width: '90%'}}>
        <h4>Component-2</h4>  
        <Text2 text={count} />
        <Button2 onClick={handleClickCount}>Add</Button2>
        <hr />
        <div>Text-adjacent: {count2}</div>
        <button onClick={handleClickCount2}>Add</button>
    </div>
}

// export default Component2;
export default Component2;