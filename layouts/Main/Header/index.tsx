import Props from './Header.props';
import { getHeaderStyles } from './Header.style';

const Header = ({ variant }: Props): JSX.Element => {
	return (
		<header className={getHeaderStyles(variant)}>
			<a
				className='md:my-8 text-white font-bold font-benzin md:text-2xl inline-block'
				href='/'
			>
				Город практик будущего
			</a>
		</header>
	);
};

export default Header;
