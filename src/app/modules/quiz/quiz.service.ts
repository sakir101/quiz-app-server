import mongoose from "mongoose";
import { IQuestion } from "./quiz.interface";
import { Question } from "./quiz.model";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";



const createQuiz = async (question: IQuestion): Promise<IQuestion> => {

    const result = await Question.create(question);
    if (!result) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create quiz')
    }

    return result;

};

const fetchAllQuizzes = async (): Promise<IQuestion[]> => {
    const quizzes = await Question.find();
    if (!quizzes) {
        throw new ApiError(httpStatus.NOT_FOUND, 'No quizzes found');
    }
    return quizzes;
};

const deleteQuiz = async (quizId: string): Promise<IQuestion | null> => {
    const result = await Question.findByIdAndDelete(quizId);
    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not found');
    }
    return result;
};

const updateQuiz = async (quizId: string, updatedData: Partial<IQuestion>): Promise<IQuestion | null> => {
    const result = await Question.findByIdAndUpdate(quizId, updatedData, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not found');
    }
    return result;
};

export const QuizService = {
    createQuiz,
    fetchAllQuizzes,
    deleteQuiz,
    updateQuiz
}
