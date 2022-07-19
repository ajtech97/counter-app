import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { COUNTER, setLocalData, getLocalData } from "./utils/storage.js";

const App = () => {
	const [count, setCount] = useState(0);
	const [counterText, setCounterText] = useState("");
	const [isDisabled, setDisabled] = useState(false);

	const handleCountAddition = () => {
		setCount(prevCount => prevCount + 1);
	};

	const handleCountSubtract = () => {
		if (count === 1) {
			setDisabled(prevState => (prevState = true));
		}
		if (count > 0) {
			setDisabled(prevState => (prevState = false));
			setCount(prevCount => prevCount - 1);
		}
	};

	const handleCounterTextChange = event => {
		setCounterText(event.target.value);
	};

	const handleClickOnSave = () => {
		setLocalData(COUNTER, { count, counterText });
	};

	useEffect(() => {
		setCount(getLocalData(COUNTER).count || 0);
		setCounterText(getLocalData(COUNTER).counterText || "");
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
				<button
					class="button-subtract"
					onClick={handleCountSubtract}
					disabled={isDisabled}
				>
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
