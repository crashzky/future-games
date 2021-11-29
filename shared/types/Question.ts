import { Answer } from './Answer';

export interface Question {
    id: number;
    title: string;
    answers: Answer[];
}
