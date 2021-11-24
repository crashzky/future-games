import { Menu } from 'lucide-react';

const Header = (): JSX.Element => {
	return (
		<header className='flex sticky top-0 bg-black z-10'>
			<button className='w-12 h-12 p-3'>
				<Menu color='white' />
			</button>
			<div className='bg-white w-full h-full text-right text-black py-3.5 pr-4 font-bold'>
				Альманах практик будущего
			</div>
		</header>
	);
};

export default Header;
