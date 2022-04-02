import Props from './Footer.props';
import getFooterStyles from './Footer.styles';

const Footer = ({ variant }: Props): JSX.Element => {
	return (
		<footer className={getFooterStyles(variant)}>
			{/*Команда mobile*/}
			<a
				href='/about'
				className='block md:hidden font-bold font-benzin underline text-center'
			>
				О проекте
			</a>
			<a href='https://kruzhok.org'>
				<img
					src='/kruzhok.png'
					alt='Kruzhok'
					className='mx-auto scale-60 md:scale-100 my-6 md:my-10' />
			</a>
			{/*Команда desktop*/}
			<div>
				<a
					href='/about'
					className='hidden md:block md:mt-8 md:mb-2 font-bold font-benzin text-2xl underline text-center'
				>
					О проекте
				</a>
				<a
					href='https://future-almanac.com/ru/'
					className='hidden md:block font-semibold text-custom-blue'
				>
					Альманах практик будущего
				</a>
			</div>
			<a href='https://президентскиегранты.рф'>
				<img
					src='/fund_grants.png'
					alt='Founf grants'
					className='mx-auto scale-70 md:scale-100 mb-6 md:my-8 block' />
			</a>
		</footer>
	);
};

export default Footer;
