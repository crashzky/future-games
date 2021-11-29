import { Category } from './Category';
import { SelectedAnswer } from './SelectedAnswers';

interface IGameState {
	selectedCategory: Category;
	selectCategory: (category: Category) => void;
    selectedAnswers: Array<SelectedAnswer>;
    updateAnswers: (selectedAnswer: SelectedAnswer) => void;
}

export default IGameState;
