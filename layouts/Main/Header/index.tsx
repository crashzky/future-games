import { Menu } from 'lucide-react';
import HEADER_ITEMS from '../../../shared/headerItems';
import Props from './Header.props';
import { getHeaderStyles } from './Header.style';

const Header = ({ variant }: Props): JSX.Element => {
	return (
		<header className={getHeaderStyles(variant)}>
			{/*mobile*/}
			<button className='md:hidden w-12 h-12 p-3'>
				<Menu color='white' />
			</button>
			<a
				href='https://almanac.kruzhok.org/'
				className='md:hidden bg-white w-full h-full text-right text-black py-3.5 pr-4 font-bold'
			>
				Альманах практик будущего
			</a>
			{/*desktop*/}
			<a
				href='https://almanac.kruzhok.org/'
				className='hidden md:block w-80 h-full text-right text-white text-xl py-10 pr-4 font-bold'
			>
				Альманах практик будущего
			</a>
			<nav className='hidden md:block py-10'>
				{HEADER_ITEMS.map((i, num) => (
					<a
						key={num}
						className='text-white text-sm font-semibold inline-block uppercase mr-6'
						href={i.link}
					>
						{i.label}
					</a>
				))}
			</nav>
		</header>
	);
};

export default Header;
