import Props from './SliderItem.props';

const SliderItem = ({ backgroundColor, label, selected, className = '', ...props }: Props): JSX.Element => {
	function getBorder() {
		if(selected)
			return 'border-2 border-white';
		else
			return '';
	}

	return (
		<button
			style={{
				width: window.innerWidth - 88,
				height: window.innerWidth - 88,
			}}
			className={`${className} ${backgroundColor} ${getBorder()} flex items-end p-5`}
			{...props}>
			<p className='font-black text-2xl text-left'>
				{label}
			</p>
		</button>
	);
};

export default SliderItem;
