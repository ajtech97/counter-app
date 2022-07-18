import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { COUNTER, setLocalData, getLocalData } from "./utils/storage.js";

const App = () => {
	const [count, setCount] = useState(0);

	const [counterText, setCounterText] = useState("");

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
		setLocalData(COUNTER, { count, counterText });
	};

	const changeCountValue = () => {
		const data = getLocalData(COUNTER);
		const invalue = JSON.parse(data).count;
		return invalue;
	};

	const changeCountTextValue = () => {
		const data = getLocalData(COUNTER);
		const invalue = JSON.parse(data).counterText;
		return invalue;
	};

	useEffect(() => {
		setCount(changeCountValue);
	}, []);

	useEffect(() => {
		setCounterText(changeCountTextValue);
	}, []);

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
