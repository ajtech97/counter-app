import React from "react";
import { useState } from "react";
import "./App.css";
import { COUNTER, setLocalStorage, getLocalStorage } from "./utils/storage.js";

const App = () => {
	const [count, setCount] = useState(() => {
		const data = getLocalStorage(COUNTER);
		return JSON.parse(data).count || 0;
	});

	const [counterText, setCounterText] = useState(() => {
		const data = getLocalStorage(COUNTER);
		return JSON.parse(data).counterText || 0;
	});

	const handleCountAddition = () => {
		setCount(prevCount => prevCount + 1);
	};

	const handleCountSubtract = () => {
		setCount(prevCount => prevCount - 1);
	};

	const handleCounterTextChange = event => {
		setCounterText(event.target.value);
	};

	const handleClickOnSave = () => {
		setLocalStorage(COUNTER, { count, counterText });
	};

	return (
		<main>
			<h1>Counter App</h1>
			<input
				type="text"
				class="counter-text"
				placeholder="Enter name for your counter"
				value={counterText}
				onChange={handleCounterTextChange}
			/>
			<div class="counter-count">{count}</div>
			<div class="button-container">
				<button class="button-subtract" onClick={handleCountSubtract}>
					-
				</button>
				<button class="button-add" onClick={handleCountAddition}>
					+
				</button>
			</div>
			<div class="button-container">
				<button class="button-save" onClick={handleClickOnSave}>
					Save
				</button>
			</div>
		</main>
	);
};

export default App;
