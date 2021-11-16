import {useState} from 'react';
import ContestItem from '../../components/ContestItem';
import ContestLayout from '../../layouts/Contest';
import answers1 from './answers';

const SourcesContestPage = (): JSX.Element => {
	const [currentActive, setCurrentActive] = useState(0);

	return (
		<ContestLayout backgroundColor='bg-blue-700' label='Источники энергообеспечения города'>
			<ContestItem
				currentNumber={1}
				allNumber={3}
				title='Как проект будет учитывать влияние стресса на здоровье?'
				answers={answers1}
				onClick={() => {
					setCurrentActive(1);
					window.scrollBy({
						top: 575,
						behavior: 'smooth',
					});
				}}
			/>
			<ContestItem
				currentNumber={2}
				allNumber={3}
				title='Как проект будет помогать человеку вводить новые привычки и закреплять новый образ жизни?'
				answers={answers1}
				onClick={() => setCurrentActive(2)}
				disabled={currentActive < 1}
			/>
		</ContestLayout>
	);
};

export default SourcesContestPage;
