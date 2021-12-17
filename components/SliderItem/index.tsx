import Props from './SliderItem.props';
import { useEffect, useState } from 'react';

const SliderItem = ({ backgroundColor, label, selected, className = '', ...props }: Props): JSX.Element => {
	const padding: number = 88;
	const [windowWidth, setWindowWidth] = useState(padding);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	const getBorderStyle = (): string => {
		return selected ? 'border-2 border-white' : '';
	};

	return (
		<button
			style={{
				width: windowWidth - padding,
				height: windowWidth - padding,
			}}
			className={`${className} ${backgroundColor} ${getBorderStyle()} flex items-end p-5`}
			{...props}
		>
			<p className='font-black text-2xl text-left'>
				{label}
			</p>
		</button>
	);
};

export default SliderItem;
