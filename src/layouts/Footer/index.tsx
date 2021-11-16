import {ArrowUp} from 'lucide-react';

const Footer = (): JSX.Element => {
	return (
		<div className='my-11'>
			<p className='font-medium text-center'>
				Команда
			</p>
			<p className='font-medium text-center mt-7'>
				©
				{' ' + new Date(Date.now()).getFullYear() + ' '}
				<span className='text-blue-600'>
					Кружковое движение
				</span>
			</p>
			<a className='font-medium mt-6 text-center block' href='#topBlock'>
				Перейти в начало страницы
				{' '}
				<ArrowUp color='white' className='inline' />
			</a>
		</div>
	);
};

export default Footer;
