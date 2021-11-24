import create from 'zustand';
import IGameState from '../shared/types/GameState';

export const useStore = create<IGameState>((set) => ({
	selectedAnswers: [],
	selectedCategory: { backgroundStyle: undefined, value: undefined },
	selectCategory: (category) => set({ selectedCategory: category }),
	addAnswer: (index) => set((state) => {
		return { selectedAnswers: [...state.selectedAnswers, index] };
	}),
}));
