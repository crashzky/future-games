import { Category } from './types/Category';
import { Result } from './types/Result';

export const areArraysSame = (a: any[], b: any[]): boolean => {
	if (a?.length !== b?.length)
		return false;

	for (let i=0; i<a.length; i++){
		if (a[i] !== b[i])
			return false;
	}
	return true;
};

export const matchAnswers = (answers: number[], category: Category): Result => {
	const availableResults = category.results;

	for(let i=0; i<availableResults.length; i++){
		const result = availableResults[i];
		if (areArraysSame(answers, result.combination))
			return result;
	}

	return undefined;
};
