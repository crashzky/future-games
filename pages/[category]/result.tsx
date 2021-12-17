import React from 'react';
import ContestLayout from '../../layouts/Contest';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { availableCategories } from '../../shared/categories';
import { FacebookShareButton, TelegramShareButton, TwitterShareButton, VKShareButton } from 'react-share';
import { useRouter } from 'next/router';
import { Result } from '../../shared/types/Result';
import { Category } from '../../shared/types/Category';
import Button from '../../components/Button';
import Image from 'next/image';

const ContestResultPage = ({ category }: Props): JSX.Element => {
	const { query, push } = useRouter();
	const selectedCategory: Category = availableCategories[availableCategories.map((i) => i.link).indexOf(category)];
	const resultId = query?.id;
	const result: Result = selectedCategory.results.find((res) => res.id.toString() === resultId);

	return (
		<ContestLayout backgroundColor={selectedCategory.backgroundStyle} label={selectedCategory.value}>
			{result ? (
				<div>
					<h1 className='hidden w-full md:block text-center text-2xl'>
						{selectedCategory.value}
					</h1>
					<div className='mx-auto w-fit'>
						<Image
							className='scale-80 md:scale-100 mt-4 md:mt-8'
							src={selectedCategory.resultImage}
							width={204}
							height={204} />
					</div>
					<p className='font-bold text-xl md:text-2xl'>
						{result.header}
					</p>
					<p className='md:text-xl mt-6'>
						{result.description}
					</p>
					<div className='mt-8 grid grid-cols-2 gap-4'>
						<Button label='Переиграть' variant='outlined' onClick={() => push('/' + selectedCategory.link)} />
						<Button
							label='Выбрать другой кейс'
							variant='enabled'
							onClick={() => push('/')}
							className={selectedCategory.backgroundStyle} />
					</div>
					<p className='mt-8 text-center md:text-xl'>
						Поделиться в соцсетях:
					</p>
					{typeof window !== 'undefined' && (
						<div className='w-fit mt-3 mx-auto'>
							<VKShareButton
								title={selectedCategory.appeal}
								url={window.location.href}
							>
								<img src='/vk.svg' className='mr-6' alt={'vk'} />
							</VKShareButton>
							<FacebookShareButton
								quote={selectedCategory.appeal}
								url={window.location.href}
							>
								<img src='/facebook.svg' className='mr-6' alt='facebook' />
							</FacebookShareButton>
							<TwitterShareButton
								title={selectedCategory.appeal + '\n\nИгра-квест от кружкового движения'}
								url={window.location.href}
							>
								<img src='/twitter.svg' className='mr-6' alt='facebook' />
							</TwitterShareButton>
							<TelegramShareButton
								title={selectedCategory.appeal + '\n\nИгра-квест от кружкового движения'}
								url={window.location.href}
							>
								<img src='/telegram.svg' alt='telegram' />
							</TelegramShareButton>
						</div>
					)}
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
