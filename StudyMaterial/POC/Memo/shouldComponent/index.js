import React, { useState } from "react";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";


const ShouldComponentupdateExample = () => {

// Using useState hooks for defining state
const [counter1, setCounter1] = useState(0);

const increase1 = () => {
	setCounter1(counter1 + 1);
};
const [counter2, setCounter2] = useState(0);

const increase2 = () => {
	setCounter2(counter2 + 1);
};
	
return (
	<>
	<>
		<Counter1 value={counter1} onClick={increase1} />
	</>
	<>
		<Counter2 value={counter2} onClick={increase2} />
	</>
	</>
);
};

export default ShouldComponentupdateExample;
