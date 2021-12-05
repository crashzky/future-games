import { Category } from './types/Category';
import { stubQuestions } from './questions/Stub';
import { HappinessAndHealth } from './questions/HappinessAndHealth';

export const availableCategories: Category[] = [
	{
		link: 'health',
		value: 'Здоровье человека',
		backgroundStyle: 'bg-red-400',
		quiz: stubQuestions,
		results: [
			{
				combination: [0, 0, 0],
				header: 'TODO',
				description: 'TOOD',
			},
		],
	},
	{
		link: 'sources',
		value: 'Источники энергообеспечения города',
		backgroundStyle: 'bg-blue-700',
		quiz: stubQuestions,
		results: [
			{
				combination: [0, 0, 0],
				header: 'TODO',
				description: 'TOOD',
			},
		],
	},
	{
		link: 'inclusive',
		value: 'Среда доступных возможностей',
		backgroundStyle: 'bg-purple-500',
		quiz: stubQuestions,
		results: [
			{
				combination: [0, 0, 0],
				header: 'TODO',
				description: 'TOOD',
			},
		],
	},
	{
		link: 'happiness_and_health',
		value: 'Счастье и здоровье человека',
		backgroundStyle: 'bg-red-500',
		quiz: HappinessAndHealth,
		results: [
			{
				combination: [1, 0, 0],
				header: 'Комбо 1!',
				description: 'Крутое описание',
			},
			{
				combination: [2, 0, 0],
				header: 'Комбо 2!',
				description: 'Крутое описание (еще круче)',
			},
		],
	},
];
