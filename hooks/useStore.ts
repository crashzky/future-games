import create from 'zustand';
import { Category } from '../shared/types/Category';
import { SelectedAnswer } from '../shared/types/SelectedAnswers';
import IGameState from '../shared/types/GameState';
import { matchAnswers } from '../shared/utils';

export const useStore = create<IGameState>((set) => ({
	selectedAnswers: [],
	currentResult: undefined,
	selectedCategory: {
		backgroundStyle: undefined,
		value: undefined,
		link: undefined,
		quiz: [],
		results: [],
		description: '',
		idea: '',
	},
	selectCategory: (category: Category) => set(() => ({ selectedCategory: category })),
	updateAnswers: (selectedAnswer: SelectedAnswer) => set((state) => {
		let answers = [];
		const selectedAnswers = state.selectedAnswers;
		let isAnswerHandled = false;
		for (let i=0; i< selectedAnswers.length; i++) {
			const item = selectedAnswers[i];
			if (selectedAnswer.questionId === item.questionId){
				answers.push(selectedAnswer);
				isAnswerHandled = true;
			}
			else
				answers.push(item);
		}
		if (!isAnswerHandled)
			answers.push(selectedAnswer);

		const category = state.selectedCategory;
		let result = undefined;

		// Calculate result if all answers received, to improve performance
		if (answers.length === category.quiz?.length){
			const answersId = answers.map((item) => item.answerId);
			result = matchAnswers(answersId, category);
			if (!result) {
				// TODO Answers not matched. handle error
				// Now result page simplify won't be shown.
			}
		}

		return { selectedAnswers: answers, currentResult: result };
	}),
}));

