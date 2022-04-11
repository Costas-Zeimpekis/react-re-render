import React from 'react';
import Component2 from "./Component2";
import Text1 from './Text1';
 

function Component1() {
    const [count, setCount] = React.useState(0)
    console.log("Component-1 re-render");

    const handleClickCount = () => {
        console.log('Component-1 handlerClick re-render')
        setCount(count +1);
    }

  return (
    <div
      style={{
        border: '1px solid black',
        margin: 24,
        padding: 16
      }}
    >
      <h4>Component-1</h4>  
      <Text1 text={count} />
      <button onClick={handleClickCount}>Add</button>
      <Component2 />
    </div>
  );
}

// export default Component1;
export default React.memo(Component1);
