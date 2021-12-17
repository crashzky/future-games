import Props from './Button.props';

const Button = ({ label, variant, className = '', ...props }: Props): JSX.Element => {
	function getStyles() {
		switch(variant) {
			case 'disabled':
				return 'bg-gray-700 text-gray-500 rounded-sm';
			case 'enabled':
				return 'bg-blue-700 rounded-sm';
			case 'outlined':
				return 'bg-black rounded-sm border-gray-200 border-2';
		}
	}

	return (
		<button className={`${className} ${getStyles()} w-full py-3.5 font-bold`} {...props}>
			{label}
		</button>
	);
};

export default Button;
