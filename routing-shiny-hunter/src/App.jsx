import "./App.css";
import { Routes, Route } from "react-router-dom";
import ViewOne from './components/ViewOne'
import Header from './components/Header'
import ViewAll from './components/ViewAll'

function App() {
	return (
		<div className="App">
			{/* Any element that is outside of the Routes tag will display on *EVERY* page */}
			<Header />
			<Routes>
				<Route path="/viewone" element={<ViewOne />} />
				<Route path="/all" element={<ViewAll />} />
      		</Routes>
		</div>
	);
}

export default App;
