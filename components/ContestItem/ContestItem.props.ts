import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Question } from '../../shared/types/Question';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentNumber: number;
	count: number;
	question: Question;
	onClick: () => void;
	disabled?: boolean;
	buttonStyle: string;
}

export default Props;
