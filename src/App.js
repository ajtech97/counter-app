import React from "react";
import "./App.css";
import Counter from "./Counter";

const App = () => {
	return (
		<main>
			<Counter />
			<div class="button-container">
				<button class="button-new">Add Counter</button>
			</div>
		</main>
	);
};

export default App;
