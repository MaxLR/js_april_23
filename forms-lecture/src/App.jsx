import { useState } from "react";
import "./App.css";

const App = () => {
	const [phrase, setPhrase] = useState("");
	const [num, setNum] = useState(0);
	const [phraseMessage, setPhraseMessage] = useState("");
	const [numMessage, setNumMessage] = useState("");

	const handleChange = (event) => {
		//destructuring event.target dictionary into separate variables for readability
		const { name, value } = event.target;
		if (name === "phrase") {
			setPhrase(value);
			if (value.length < 3) {
				setPhraseMessage(
					"Hey, this should probably be a few more characters"
				);
			} else if (value === "1 time only") {
				setPhraseMessage("You guessed the secret passcode!!");
			} else {
				setPhraseMessage("");
			}
		} else {
			setNum(value);
			if (value < 5) {
				setNumMessage("That's a low number");
			} else if (Number(value) === 42) {
				setNumMessage("Yep, that's the answer to life's mysteries");
			} else {
				setNumMessage("");
			}
		}
	};

	return (
		<div className="App">
			<h1>Our Form Project!</h1>
			<br />
			<label>Phrase:</label>
			<input
				type="text"
				name="phrase"
				onChange={(e) => handleChange(e)}
			></input>
			<br />
			{phraseMessage ? <label>{phraseMessage}</label> : ""}
			<br />
			<label htmlFor="">Pick a number:</label>
			<br />
			{numMessage ? <label>{numMessage}</label> : ""}
			<input
				type="number"
				name="num"
				onChange={(e) => handleChange(e)}
			></input>

			<div>
				<h3>User Data</h3>
				<label htmlFor="">My Phrase is: {phrase}</label>
				<br />
				<label htmlFor="">My Number is: {num}</label>
			</div>
		</div>
	);
};

export default App;
