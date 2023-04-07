import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import AllData from "./components/AllData";

const App = () => {
	const [submittedData, setSubmittedData] = useState([{phrase: "Hello!", num: 17}, {phrase: "Phrase 2!", num: 42}, {phrase: "Over 9000", num: 9001}])

	const addSubmittedData = (data) => {
		setSubmittedData([...submittedData, data]);
	}
	
	return (
		<div className="App">
			<h1>Our Form Project!</h1>
			<br />
			<UserForm addSubmittedData={addSubmittedData}/>

			<AllData submittedData={submittedData} />
		</div>
	);
};

export default App;