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

const getQuizByQuizId = async (quizId: string): Promise<IQuestion | null> => {
    const quiz = await Question.findOne({ quizId: quizId });
    if (!quiz) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not found');
    }
    return quiz;
};

const getQuizById = async (quizId: string): Promise<IQuestion | null> => {
    console.log(quizId)
    const quiz = await Question.findById({ _id: quizId });
    if (!quiz) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not found');
    }
    return quiz;
};

export const QuizService = {
    createQuiz,
    fetchAllQuizzes,
    deleteQuiz,
    updateQuiz,
    getQuizByQuizId,
    getQuizById
}
