import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from '../components/SliderItem';
import MainLayout from '../layouts/Main';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import { availableCategories } from '../shared/categories';
import { useStore } from '../hooks/useStore';

const MainPage = (): JSX.Element => {
	const router = useRouter();
	const containerRef = useRef<HTMLDivElement>();

	const selectCategory = useStore((state) => state.selectCategory);
	const selectedCategory = useStore((state) => state.selectedCategory);
	const [windowWidth, setWindowWidth] = useState(0);

	const slidesPerView = windowWidth > 513 ? 1.12 : 1.2;

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	const isCategorySelected = ():boolean => {
		return selectedCategory && selectedCategory.value && selectedCategory.value.length > 0;
	};

	const getCurrentCategoryLabel = (): string => {
		if (!isCategorySelected())
			return 'Вы пока не выбрали кейс';

		return 'Вы выбрали: ' + selectedCategory.value;
	};

	const onClickNext = (): void => {
		if(containerRef.current)
			containerRef.current.className = 'transition-all opacity-0';

		setTimeout(() => {
			router.push('/sources');
			window.scrollTo({
				top: 0,
			});
		}, 150);
	};

	return (
		<MainLayout>
			<div className='transition-all' ref={containerRef as any}>
				<h1 className='font-bold font-benzin text-2xl text-center mt-8'>
					Игра-квест от кружкового движения
				</h1>
				<p className='px-4 mt-8 pt-0.5'>
					Мы в практиках будущего каждый день занимаемся решением проблем.
				</p>
				<p className='px-4 mt-4'>
					Пройдите наш тест и попробуйте решить одну из таких проблем!
					Тут надо сказать что-то еще, потому что игра настолько крутая, что нужно говорить
					очень много и по делу! Так что давайте представим, что тут я написал, ок?
				</p>
				<p className='px-4 mt-4'>
					(тесты можно проходить несколько раз)
				</p>
				<h2 className='mt-12 pt-0.5 px-4 font-black text-2xl'>
					Выберите один из актуальных кейсов
				</h2>
				<div className='w-screen mt-6'>
					<Swiper
						slidesPerView={slidesPerView}
						centeredSlides={true}
						spaceBetween={16}
						pagination={{ 'clickable': true }}
					>
						{availableCategories?.map((category, key) => {
							return (
								<SwiperSlide key={key}>
									<SliderItem
										backgroundColor={category.backgroundStyle}
										label={category.value}
										onClick={() => selectCategory(category)}
										selected={selectedCategory.value === category.value} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				<div className='px-4 mt-8'>
					<Button
						variant={isCategorySelected() ? 'enabled' : 'disabled'}
						label='Вперед!'
						onClick={onClickNext} />
				</div>
				<p className='mt-3 text-sm text-gray-400 text-center'>
					{getCurrentCategoryLabel()}
				</p>
			</div>
		</MainLayout>
	);
};

export default MainPage;
