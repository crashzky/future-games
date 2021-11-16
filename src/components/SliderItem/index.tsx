import Props from './SliderItem.props';

const SliderItem = ({ backgroundColor, label, selected, className = '', ...props }: Props): JSX.Element => {
	const padding: number = 88;
	const getBorderStyle = (): string => {
		return selected ? 'border-2 border-white' : '';
	};

	return (
		<button
			style={{
				width: window.innerWidth - padding,
				height: window.innerWidth - padding,
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
