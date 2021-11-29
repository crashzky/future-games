import React, { useState } from 'react';
import ContestItem from '../components/ContestItem';
import ContestLayout from '../layouts/Contest';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { availableCategories } from '../shared/categories';

const SourcesContestPage = ({ category }: Props): JSX.Element => {
	const [currentActive, setCurrentActive] = useState(0);
	const selectedCategory = availableCategories[availableCategories.map((i) => i.link).indexOf(category)];
	const blockHeight = 200;

	return (
		<ContestLayout backgroundColor={selectedCategory.backgroundStyle} label={selectedCategory.value}>
			<div>
				{selectedCategory?.quiz?.map((question, key) => {
					const quiz = selectedCategory.quiz;
					return (
						<ContestItem
							key={key}
							currentNumber={key + 1}
							count={quiz.length}
							question={question}
							onClick={() => {
								setCurrentActive(key + 1);
								window.scrollBy({
									// TODO fix scrolling. Use refs
									top: (quiz.length - key - 1) * blockHeight,
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
