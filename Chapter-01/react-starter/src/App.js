import { useState } from "react";

function App() {
	const [name, setName] = useState("Andre");

	const helloWorld = () => {
		setName("Loser");
		console.log("Hello, World!");
		console.log(name);
	};
	return (
		<div className="Test">
			<h1>Hello {name}</h1>
			<button onClick={helloWorld}>CLICK ME</button>
		</div>
	);
}

export default App;
