import create from 'zustand';
import IGameState from '../shared/types/GameState';

export const useStore = create((set: any) => ({
	selectedAnswers: [],
	selectedCategory: { backgroundStyle: undefined, value: undefined },
	selectCategory: (category) => set(() => ({ selectedCategory: category })),
	addAnswer: (index) => set((state) => (
		{ selectedAnswers: [...state.selectedAnswers, index] }
	)),
}));
