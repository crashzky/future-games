import Props from './SliderItem.props';
import { useEffect, useState } from 'react';

const SliderItem = ({
	backgroundColor,
	label,
	selected,
	width,
	height,
	className = '',
	onClick,
	image,
	...props
}: Props): JSX.Element => {
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
				width: width ? width : windowWidth - padding,
				height: height? height : windowWidth - padding,
			}}
			onClick={(e) => {
				(e.target as any).blur();
				onClick(e);
			}}
			className={`${className} ${backgroundColor} ${getBorderStyle()} flex items-end relative p-5`}
			{...props}
		>
			<img src={image} className='w-36 absolute right-2 top-2' />
			<p className='font-black text-2xl text-left'>
				{label}
			</p>
		</button>
	);
};

export default SliderItem;
