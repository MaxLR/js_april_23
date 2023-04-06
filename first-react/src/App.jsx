import "./App.css";
import Counter from './components/Counter.js';

const App = () => {
	const startingNums = [0, 1234, 17, 1, 15, 1009];
	const incrementAmounts = [1, 15, -5, 2];

	return (
		<div className="App">
			<header className="App-header">
				<h1>Hello! Welcome to our app!!!</h1>
				{startingNums.map((num, i) => {
					return <Counter initialCount={num} incrementVal={incrementAmounts[i]}/>
				})}
			</header>
		</div>
	);
};

export default App;
