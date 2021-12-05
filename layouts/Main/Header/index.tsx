import Props from './Header.props';
import { getHeaderStyles } from './Header.style';

const Header = ({ variant }: Props): JSX.Element => {
	return (
		<header className={getHeaderStyles(variant)}>
			<a
				className='text-white font-bold font-benzin md:text-2xl inline-block'
				href='/'
			>
				Выбор кейса
			</a>
			{/*Desktop*/}
			<a
				className='my-8 hidden md:block text-white font-bold font-benzin md:text-2xl inline-block'
				href='https://almanac.kruzhok.org'
			>
				Альманах практик будущего
			</a>
			{/*Mobile*/}
			<a
				className='md:hidden text-white font-bold font-benzin md:text-2xl inline-block'
				href='https://almanac.kruzhok.org'
			>
				Альманах
			</a>
		</header>
	);
};

export default Header;
