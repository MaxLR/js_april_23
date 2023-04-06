import { useState } from "react";

const Counter = ({initialCount, incrementVal}) => {
	const [counter, setCounter] = useState(initialCount);

    const handleClick = () => {
        let inc = incrementVal;
        //if the user doesn't pass in an increment amount, default to 1
        if(!inc) {
            inc = 1;
        }
		setCounter(counter + inc);
	}

	return (
		<div>
			<h3>Our count is: {counter}</h3>
			<button onClick={handleClick}>Add One.</button>
		</div>
	);
};

export default Counter;