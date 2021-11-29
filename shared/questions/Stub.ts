import { Question } from '../types/Question';
import stubAnswers from '../answers';

export const stubQuestions: Question[] = [
	{
		id: 1,
		title: 'Как проект будет учитывать влияние стресса на здоровье?',
		answers: stubAnswers,
	},
	{
		id: 2,
		title: 'Как проект будет помогать человеку вводить новые привычки и закреплять новый образ жизни?',
		answers: stubAnswers,
	},
];
