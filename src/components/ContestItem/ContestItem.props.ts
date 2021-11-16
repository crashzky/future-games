import {DetailedHTMLProps, HTMLAttributes} from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentNumber: number;
	count: number;
	title: string;
	answers: Answer[];
	onClick: () => void;
	disabled?: boolean;
}

interface Answer {
	title: string;
	description: string;
	titleOnSelect: string;
	descriptionOnSelect: string;
}

export default Props;
export type {
	Answer
};

