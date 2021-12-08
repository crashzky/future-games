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
		const combinations = result.combinations;
		for (let j=0; j<combinations.length; j++) {
			const correctAnswersIndex = answers.map((item) => item + 1);
			if (areArraysSame(correctAnswersIndex, combinations[j]))
				return result;
		}
	}

	return undefined;
};
