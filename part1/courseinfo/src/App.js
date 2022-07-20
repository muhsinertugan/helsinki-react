import { Total } from './components/total/Total';
import { Content } from './components/content/Content';
import { Header } from './components/header/Header';
const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />

			{course.parts.map((item, index) => {
				return <Content key={index} parts={item} />;
			})}

			<Total parts={course.parts} />
		</div>
	);
};

export default App;
