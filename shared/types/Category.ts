import { Question } from './Question';
import { Result } from './Result';

export interface Category {
	link: string;
    value: string;
	description: string;
	idea: string;
    backgroundStyle: string;
    quiz: Question[];
    results: Result[];
}
