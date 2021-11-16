import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Answer } from '../../res/types/Answer';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentNumber: number;
	count: number;
	title: string;
	answers: Answer[];
	onClick: () => void;
	disabled?: boolean;
}

export default Props;
