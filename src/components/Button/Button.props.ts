import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	label: string;
	variant: 'disabled' | 'enabled' | 'outlined';
}

export default Props;
