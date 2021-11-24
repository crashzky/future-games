import { useState } from 'react';
import ContestItem from '../components/ContestItem';
import ContestLayout from '../layouts/Contest';
import { contests } from '../shared/contests';
import { useStore } from '../hooks/useStore';

const SourcesContestPage = (): JSX.Element => {
	const [currentActive, setCurrentActive] = useState(0);
	const selectedCategory = useStore((state) => state.selectedCategory);

	return (
		<ContestLayout backgroundColor={selectedCategory.backgroundStyle} label={selectedCategory.value}>
			{contests?.map((contest, key) => {
				return (
					<ContestItem
						key={key}
						currentNumber={key + 1}
						count={contests.length}
						title={contest.title}
						answers={contest.answers}
						onClick={() => {
							setCurrentActive(key + 1);
							window.scrollBy({
								top: (contests.length - key - 1) * 575,
								behavior: 'smooth',
							});
						}}
						disabled={currentActive < key} />
				);
			})}
		</ContestLayout>
	);
};

export default SourcesContestPage;
