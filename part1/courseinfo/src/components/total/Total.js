import React from 'react';
export function Total({ parts }) {
	const result = parts.reduce((previusValue, currentValue) => {
		return previusValue + currentValue.exercises;
	}, 0);

	return <p>Number of exercises {result}</p>;
}
