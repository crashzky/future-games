import { ArrowUp } from 'lucide-react';
import Props from './Footer.props';
import getFooterStyles from './Footer.styles';

const Footer = ({ variant }: Props): JSX.Element => {
	return (
		<div className={getFooterStyles(variant)}>
			{/*Команда mobile*/}
			<a
				href='https://almanac.kruzhok.org/team'
				className='block md:hidden font-bold text-center'
			>
				Команда
			</a>
			<a
				href='https://kruzhok.org/'
				className='block font-bold text-center mt-7'
			>
				©
				{' ' + new Date(Date.now()).getFullYear() + ' '}
				<span className='text-blue-600'>
					Кружковое движение
				</span>
			</a>
			{/*Команда desktop*/}
			<a
				href='https://almanac.kruzhok.org/team'
				className='hidden md:mt-7 md:block font-bold text-center'
			>
				Команда
			</a>
			<a className='font-bold mt-6 text-center block' href='#topBlock'>
				Перейти в начало страницы
				{' '}
				<ArrowUp color='white' className='inline' />
			</a>
		</div>
	);
};

export default Footer;
