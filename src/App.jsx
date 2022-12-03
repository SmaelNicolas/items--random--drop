import { useState } from "react";
import "./App.css";
import { getItem } from "./helpers/getItem";

function App() {
	const [item, setItem] = useState({});
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(true);
		setItem(getItem());
	};

	return (
		<div className='App'>
			{show && (
				<>
					<div>Item {item.number} </div>
					<div className={item.rarity}>Rarity {item.rarity} </div>
				</>
			)}
			<button className='button' onClick={() => handleClick()}>
				Item
			</button>
		</div>
	);
}

export default App;
