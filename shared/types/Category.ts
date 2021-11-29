import { Question } from './Question';

export interface Category {
	link: string;
    value: string;
    backgroundStyle: string;
    quiz: Question[];
}
