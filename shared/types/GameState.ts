import { Category } from './Category';

interface IGameState {
	selectedCategory: Category;
	selectCategory: (category: Category) => void;
    selectedAnswers: Array<number>;
    addAnswer: (index: number) => void;
}

export default IGameState;
