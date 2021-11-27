import { useState } from 'react';
import ContestItem from '../components/ContestItem';
import ContestLayout from '../layouts/Contest';
import { contests } from '../shared/contests';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { availableCategories } from '../shared/categories';

const SourcesContestPage = ({ category }: Props): JSX.Element => {
	const [currentActive, setCurrentActive] = useState(0);
	const selectedCategory = availableCategories[availableCategories.map((i) => i.link).indexOf(category)];

	return (
		<ContestLayout backgroundColor={selectedCategory.backgroundStyle} label={selectedCategory.value}>
			<div>
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
			</div>
		</ContestLayout>
	);
};

interface Props {
	category: string;
}

export default SourcesContestPage;

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: availableCategories.map((i) => ({
			params: { 
				category: i.link,
			},
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const { category } = context.params;

	return {
		props: {
			category,
		},
	};
};
