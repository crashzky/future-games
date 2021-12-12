import React, { useState } from 'react';
import ContestItem from '../../components/ContestItem';
import ContestLayout from '../../layouts/Contest';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { availableCategories } from '../../shared/categories';
import { useRouter } from 'next/router';
import { useStore } from '../../hooks/useStore';

const ContestPage = ({ category }: Props): JSX.Element => {
	const [currentActive, setCurrentActive] = useState(0);
	const selectedCategoryFromLink = availableCategories[availableCategories.map((i) => i.link).indexOf(category)];
	const setSelectedCategory = useStore((state) => state.selectCategory);
	// Make ability to skip main menu and select category by link
	setSelectedCategory(selectedCategoryFromLink);
	const result = useStore((state) => state.currentResult);
	const blockHeight = 200;

	const router = useRouter();

	const goToResultsPage = (): void => {
		router.push({
			pathname: router.pathname + '/result',
			query: {
				category: router.query.category,
				id: result?.id,
			},
		});
	};

	const handleClickNext = (key) => {
		const quiz = selectedCategoryFromLink.quiz;
		if (currentActive >= quiz.length - 1)
			goToResultsPage();
		else {
			setCurrentActive(key + 1);
			window.scrollBy({
				// TODO fix scrolling. Use refs
				top: (quiz.length - key - 1) * blockHeight,
				behavior: 'smooth',
			});
		}
	};

	return (
		<ContestLayout backgroundColor={selectedCategoryFromLink.backgroundStyle} label={selectedCategoryFromLink.value}>
			<div className='grid grid-flow-col'>
				<img src='/arrow.svg' alt='arrow' />
				<h1 className='text-2xl inline-block w-full sm:w-96 text-center'>
					{selectedCategoryFromLink.value}
				</h1>
			</div>
			<p className='text-xl mt-6'>
				{selectedCategoryFromLink.description}
			</p>
			<p className='text-xl mt-5'>
				{selectedCategoryFromLink.idea}
			</p>
			<div>
				{selectedCategoryFromLink?.quiz?.map((question, key) => {
					const quiz = selectedCategoryFromLink.quiz;
					return (
						<ContestItem
							key={key}
							currentNumber={key + 1}
							count={quiz.length}
							question={question}
							onClick={() => handleClickNext(key)}
							disabled={currentActive < key}
							buttonStyle={selectedCategoryFromLink.backgroundStyle} />
					);
				})}
			</div>
		</ContestLayout>
	);
};

interface Props {
	category: string;
}

export default ContestPage;

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
