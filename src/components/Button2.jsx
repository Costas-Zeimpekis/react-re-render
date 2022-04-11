import React from 'react';

function Button2({children, onClick}) {
    console.log('Button-2 re-render');
    return <button onClick={onClick}>{children}</button>
}

export default React.memo(Button2,  (prevProps, nextProps) => {
    console.log('Perv props', prevProps)
    console.log('Next props', nextProps)

    return prevProps === nextProps;
  });