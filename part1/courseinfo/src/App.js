import { Total } from './components/total/Total';
import { Content } from './components/content/Content';
import { Header } from './components/header/Header';
const App = () => {
	const course = 'Half Stack application development';

	return (
		<div>
			<Header course={course} />
			<Content />
			<Total />
		</div>
	);
};

export default App;
