import Props from './SliderItem.props';

const SliderItem = ({ backgroundColor, label, className = '', ...props }: Props): JSX.Element => {
	return (
		<button
			style={{
				width: window.innerWidth - 88,
				height: window.innerWidth - 88,
			}}
			className={`${className} ${backgroundColor} flex items-end p-5`}
			{...props}>
			<p className='font-black text-2xl text-left'>
				{label}
			</p>
		</button>
	);
};

export default SliderItem;
