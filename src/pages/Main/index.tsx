import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from '../../components/SliderItem';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import MainLayout from '../../layouts/Main';
import Button from '../../components/Button';

const MainPage = (): JSX.Element => {

	return (
		<MainLayout>
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
					<SwiperSlide>
						<SliderItem backgroundColor='bg-red-400' label='Здоровье человека' />
					</SwiperSlide>
					<SwiperSlide>
						<SliderItem backgroundColor='bg-blue-700' label='Источники энергообеспечения города' />
					</SwiperSlide>
					<SwiperSlide>
						<SliderItem backgroundColor='bg-purple-500' label='Среда доступных возможностей' />
					</SwiperSlide>
				</Swiper>
			</div>
			<div className='px-4 mt-8'>
				<Button variant='disabled' label='Вперед!'/>
			</div>
			<p className='mt-3 text-sm text-gray-400 text-center'>
				Вы пока не выбрали кейс
			</p>
		</MainLayout>
	);
};

export default MainPage;
