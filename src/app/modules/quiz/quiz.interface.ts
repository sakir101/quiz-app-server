import { Model } from "mongoose";

export type IOption = {
    text: string;
    isCorrect: boolean;
};

export type IQuestion = {
    questionText: string;
    quizId: number;
    options: IOption[];
    timeLimit: number;
};


export type QuestionModel = Model<IQuestion, Record<string, unknown>>;

export type IQuestionFilters = {
    searchTerm?: string;

}