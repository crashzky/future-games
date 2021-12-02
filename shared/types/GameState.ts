import { Category } from './Category';
import { SelectedAnswer } from './SelectedAnswers';
import { Result } from './Result';

interface IGameState {
	selectedCategory: Category;
	selectCategory: (category: Category) => void;
    selectedAnswers: Array<SelectedAnswer>;
    updateAnswers: (selectedAnswer: SelectedAnswer) => void;
    currentResult: Result;
}

export default IGameState;
