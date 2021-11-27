import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	backgroundColor: string;
	label: string;
	selected?: boolean;
	width?: number;
	height?: number;
}

export default Props;
