import React, { useEffect } from "react";
import { useState } from "react";
import { COUNTER, setLocalData, getLocalData } from "./utils/storage.js";
import "./Counter.css";

const Counter = () => {
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

	useEffect(() => {
		setCount(getLocalData(COUNTER).count || 0);
		setCounterText(getLocalData(COUNTER).counterText || "");
	}, []);

	return (
		<>
			<main>
				<h1>Counter App</h1>

				<div class="main-container">
					<input
						type="text"
						class="counter-text"
						placeholder="Enter name for your counter"
						value={counterText}
						onChange={handleCounterTextChange}
					/>
					<div class="inner-container">
						<button
							class="button button-subtract"
							onClick={handleCountSubtract}
							disabled={count === 0}
						>
							-
						</button>
					</div>
					<div class="inner-container">
						<div class="counter-count">{count}</div>
					</div>
					<div class="inner-container">
						<button class="button button-add" onClick={handleCountAddition}>
							+
						</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default Counter;
