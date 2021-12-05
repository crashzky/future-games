import React from 'react';
import ContestLayout from '../../layouts/Contest';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { availableCategories } from '../../shared/categories';
import { FacebookShareButton, TelegramShareButton, VKShareButton } from 'react-share';
import { useRouter } from 'next/router';
import { Result } from '../../shared/types/Result';
import { Category } from '../../shared/types/Category';

const ContestResultPage = ({ category }: Props): JSX.Element => {
	const { query } = useRouter();
	const selectedCategory: Category = availableCategories[availableCategories.map((i) => i.link).indexOf(category)];
	const resultId = query?.id;
	const result: Result = selectedCategory.results.find((res) => res.id.toString() === resultId);

	return (
		<ContestLayout backgroundColor={selectedCategory.backgroundStyle} label={selectedCategory.value}>
			{result ? (
				<div>
					<h1 className='hidden md:block text-center text-2xl'>
						{selectedCategory.value}
					</h1>
					<div className='scale-80 md:scale-100 w-52 h-52 bg-gray-400 mx-auto mt-4 md:mt-8'>

					</div>
					<p className='font-bold text-xl md:text-2xl mt-8'>
						{result.header}
					</p>
					<p className='md:text-xl mt-6'>
						{result.description}
					</p>
					<p className='mt-12 text-center md:text-xl'>
						Подедиться в соцсетях:
					</p>
					<div className='w-fit mt-3 mx-auto'>
						<VKShareButton
							title='Игра-квест от кружкового движения'
							url='https://future-games.online/'
						>
							<img src='/vk.svg' className='mr-6' alt={'vk'} />
						</VKShareButton>
						<FacebookShareButton
							quote='Игра-квест от кружкового движения'
							url='https://future-games.online/'
						>
							<img src='/facebook.svg' className='mr-6' alt='facebook' />
						</FacebookShareButton>
						<TelegramShareButton
							title='Игра-квест от кружкового движения'
							url='https://future-games.online/'
						>
							<img src='/telegram.svg' alt='telegram' />
						</TelegramShareButton>
					</div>
				</div>
			) : (
				<p className='font-bold text-xl md:text-2xl mt-8'>
					Страничка не найдена :(
				</p>
			)}
		</ContestLayout>
	);
};

interface Props {
	category: string;
}

export default ContestResultPage;

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
