import create from 'zustand';
import { Category } from '../shared/types/Category';
import { SelectedAnswer } from '../shared/types/SelectedAnswers';
import IGameState from '../shared/types/GameState';

export const useStore = create<IGameState>((set) => ({
	selectedAnswers: [],
	selectedCategory: { backgroundStyle: undefined, value: undefined, link: undefined, quiz: [] },
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

		return { selectedAnswers: answers };
	}),
}));

