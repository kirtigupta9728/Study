// A higher-order component is a function that takes a 
// component and returns a new component. A higher-order component (HOC)
//  is the advanced technique in React.js for reusing a component logic. Higher-Order 
//  Components are not part of the React API.\
// HOC is a function that takes React Component as input and outputs a new React Component.

import React, { useState } from "react";

const hoc = (WrappedComponent, data) => {
  return function HOC(props) {
    const [count, setCount] = useState(data);
   console.log('data',data)
    
   const handleClick = () => {
      setCount(count + 1);
    };

    return (
      <WrappedComponent
        countNumber={count}
        handleClick={handleClick}
        {...props}
      />
    );
  };
};

export default hoc;