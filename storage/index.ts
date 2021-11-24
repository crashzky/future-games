import create from 'zustand';
import { Category } from '../shared/types/Category';

type GameState = {
	selectedCategory: Category,
	selectCategory: (category: Category) => void,
    selectedAnswers: Array<number>;
    addAnswer: (index: number) => void
}

export const useStore = create<GameState>((set) => ({
	selectedAnswers: [],
	selectedCategory: { backgroundStyle: undefined, value: undefined },
	selectCategory: (category) => set({ selectedCategory: category }),
	addAnswer: (index) => set((state) => {
		return { selectedAnswers: [...state.selectedAnswers, index] };
	}),
}));
