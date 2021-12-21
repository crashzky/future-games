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
		if(selectedCategory.value) {
			if(containerRef.current)
				containerRef.current.className = 'opacity-0';

			setTimeout(() => {
				router.push('/'
					+ availableCategories[availableCategories.map((i) => i.link).indexOf((selectedCategory as any).link)].link);
				window.scrollTo({
					top: 0,
				});
			}, 300);
		}
	};

	return (
		<MainLayout>
			<div
				className='transition-all md:duration-300 bg-black md:w-px-700 mx-auto rounded-3xl md:p-16 md:mt-14'
				ref={containerRef as any}
			>
				<h1 className='font-bold font-benzin text-2xl text-center mt-8 md:mt-0'>
					Город практик будущего
				</h1>
				<div className='px-4 md:px-0'>
					<p className='mt-8 pt-0.5'>
						Перед вами текстовая игра-конструктор стиля жизни в будущем. В ней вы познакомитесь
						с примерами социального и технологического предпринимательства, которые уже сейчас могут
						изменить образ жизни людей, а в будущем — стать распространенной практикой.
					</p>
					<p className='mt-4'>
						Выберите практику и ответьте на три вопроса о ней. Каждый вопрос поможет вам лучше
						разобраться в технологиях, их влиянии на человека и общество.
					</p>
					<p className='mt-4'>
						В этой игре нет правильных или неправильных ответов, есть только ваши выборы.
						Выбирайте те ответы, которые вам сейчас ближе, или наоборот те, в которых хотите разобраться,
						узнавайте о них больше и принимайте решения. 
					</p>
					<p className='mt-4'>
						Игру можно проходить несколько раз, собирая разные практики и формируя
						собственное видение города практик будущего.
					</p>
					<h2 className='mt-12 pt-0.5 font-black text-2xl'>
						Выберите одну из практик
					</h2>
				</div>
				{/*Mobile slider*/}
				<div className='w-screen mt-6 md:hidden'>
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
										selected={selectedCategory.value === category.value}
										image={category.image} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				{/*Desktop slider*/}
				<div className='hidden mt-6 md:grid grid-cols-2 gap-3'>
					{availableCategories?.map((category, key) => {
						return (
							<SliderItem
								width={280}
								height={280}
								key={key}
								backgroundColor={category.backgroundStyle}
								label={category.value}
								onClick={() => selectCategory(category)}
								selected={selectedCategory.value === category.value}
								image={category.image} />
						);
					})}
				</div>
				<div className='px-4 mt-8'>
					<Button
						variant={isCategorySelected() ? 'enabled' : 'disabled'}
						label='Вперед!'
						onClick={onClickNext}
						className={isCategorySelected() ? selectedCategory.backgroundStyle : 'bg-blue-1'} />
				</div>
				<p className='mt-3 text-sm text-gray-400 text-center'>
					{getCurrentCategoryLabel()}
				</p>
			</div>
		</MainLayout>
	);
};

export default MainPage;
