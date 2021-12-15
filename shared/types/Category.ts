import { Question } from './Question';
import { Result } from './Result';

export interface Category {
	link: string;
    value: string;
	appeal: string;
	description: string;
	idea: string;
    backgroundStyle: string;
    quiz: Question[];
    results: Result[];
}
