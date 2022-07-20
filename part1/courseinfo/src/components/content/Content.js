import React from 'react';
import Part from './part/Part';
export function Content({ parts }) {
	return (
		<>
			<Part part={parts.name} exercises={parts.exercises}></Part>
		</>
	);
}
