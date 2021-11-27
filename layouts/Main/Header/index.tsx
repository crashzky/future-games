import { Menu } from 'lucide-react';

const Header = (): JSX.Element => {
	const HEADER_ITEMS = ['Карта', 'Практики', 'Библиотека', 'Мероприятия'];

	return (
		<header className='flex justify-between sticky top-0 bg-black z-10 md:px-28'>
			{/*mobile*/}
			<button className='md:hidden w-12 h-12 p-3'>
				<Menu color='white' />
			</button>
			<div className='md:hidden bg-white w-full h-full text-right text-black py-3.5 pr-4 font-bold'>
				Альманах практик будущего
			</div>
			{/*desktop*/}
			<div className='hidden md:block w-80 h-full text-right text-white py-10 pr-4 font-bold'>
				Альманах практик будущего
			</div>
			<nav className='hidden md:block py-10'>
				{HEADER_ITEMS.map((i, num) => (
					<p key={num} className='text-white text-sm font-semibold inline-block uppercase mr-6'>
						{i}
					</p>
				))}
			</nav>
		</header>
	);
};

export default Header;
