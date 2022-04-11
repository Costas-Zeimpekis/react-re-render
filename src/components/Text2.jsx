import React from 'react';

function Text2 ({text}) {
    console.log('Component-2 text re-render')
    return <div>Text-2: {text}</div>
  }


  export default React.memo(Text2, (prevProps, nextProps) => {
    console.log('Perv props', prevProps)
    console.log('Next props', nextProps)

    return false;
  });