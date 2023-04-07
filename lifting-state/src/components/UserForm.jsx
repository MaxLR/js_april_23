import { useState } from "react";

const UserForm = (props) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSubmittedData({phrase, num});
        setPhrase("");
        setNum(0);
        setNumMessage("");
        setPhraseMessage("");
    }

	return (
		<form onSubmit={handleSubmit} >
			<label>Phrase:</label>
			<input
				type="text"
				name="phrase"
				onChange={(e) => handleChange(e)}
                value={phrase}
			></input>
			<br />
			{phraseMessage ? <label>{phraseMessage}</label> : ""}
			<br />
			<label htmlFor="">Pick a number:</label>
			<br />
			<input
				type="number"
				name="num"
				onChange={(e) => handleChange(e)}
                value={num}
			></input>
			<br />
			{numMessage ? <label>{numMessage}</label> : ""}
            <input type="submit" value="Add to List" />
		</form>
	);
};

export default UserForm;