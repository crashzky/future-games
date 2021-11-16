import {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SliderItem from '../../components/SliderItem';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import MainLayout from '../../layouts/Main';
import Button from '../../components/Button';
import {useNavigate} from 'react-router';
import {availableCategories} from "../../res/categories";

const MainPage = (): JSX.Element => {
	const navigate = useNavigate();
	const containerRef = useRef<HTMLDivElement>();
	const [selectedIndex, setSelectedIndex] = useState<number>();

	const getCurrentCategoryLabel = (): string =>  {
		if (selectedIndex === undefined || selectedIndex < 0 || selectedIndex > availableCategories.length)
			return 'Вы пока не выбрали кейс';

		return 'Вы выбрали: ' +  availableCategories[selectedIndex].value;
	}

	const onClickNext = (): void => {
		if(containerRef.current)
			containerRef.current.className = 'transition-all opacity-0';

		setTimeout(() =>  {
			navigate('/sources');
			window.scrollTo({
				top: 0,
			});
		}, 150);
	};

	return (
		<MainLayout>
			<div className='transition-all' ref={containerRef as any}>
				<h1 className='font-bold text-2xl text-center mt-8'>
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
					<Swiper slidesPerView={1.2} centeredSlides={true} spaceBetween={16} pagination={{ "clickable": true}}>
						{availableCategories?.map((category, key) => {
							return (
								<SwiperSlide key={key}>
									<SliderItem
										backgroundColor={category.backgroundStyle}
										label={category.value}
										onClick={() => setSelectedIndex(key)}
										selected={selectedIndex === key}
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				<div className='px-4 mt-8'>
					<Button
						variant={selectedIndex !== undefined ? 'enabled' : 'disabled'}
						label='Вперед!'
						onClick={onClickNext}
					/>
				</div>
				<p className='mt-3 text-sm text-gray-400 text-center'>
					{getCurrentCategoryLabel()}
				</p>
			</div>
		</MainLayout>
	);
};

export default MainPage;
