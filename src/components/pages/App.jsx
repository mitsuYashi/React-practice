import React, { useState } from 'react';
import FoodVal from '../morecules/FoodVal';

export default function App() {

	const [food, setFood] = useState([
			'apple',
			'banana'
		]
    )

	return (
		<FoodVal food={food} />
	)

}