import { Category } from './types/Category';
import { stubQuestions } from './questions/Stub';
import { HappinessAndHealth } from './questions/HappinessAndHealth';

export const availableCategories: Category[] = [
	{
		link: 'health',
		value: 'Здоровье человека',
		backgroundStyle: 'bg-red-400',
		quiz: stubQuestions,
	},
	{
		link: 'sources',
		value: 'Источники энергообеспечения города',
		backgroundStyle: 'bg-blue-700',
		quiz: stubQuestions,
	},
	{
		link: 'inclusive',
		value: 'Среда доступных возможностей',
		backgroundStyle: 'bg-purple-500',
		quiz: stubQuestions,
	},
	{
		link: 'happiness_and_health',
		value: 'Счастье и здоровье человека',
		backgroundStyle: 'bg-red-500',
		quiz: HappinessAndHealth,
	},
];
