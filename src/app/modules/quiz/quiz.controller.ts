import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { QuizService } from "./quiz.service";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { IQuestion } from "./quiz.interface";

const createQuiz = catchAsync(async (req: Request, res: Response) => {


    const { ...quizData } = req.body
    const result = await QuizService.createQuiz(quizData)



    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Quiz created successfully',
        data: result,
    });
})

const fetchAllQuizzes = catchAsync(
    async (req: Request, res: Response) => {

        const result = await QuizService.fetchAllQuizzes()


        sendResponse<IQuestion[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Questions retrived successfully',
            data: result,
        });
    }
)

const updateQuiz = catchAsync(
    async (req: Request, res: Response) => {

        const id = req.params.id;

        const updatedData = req.body;

        const result = await QuizService.updateQuiz(id, updatedData)

        sendResponse<IQuestion>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Quiz update successfully',
            data: result,
        });



    }
)

const deleteQuiz = catchAsync(
    async (req: Request, res: Response) => {

        const id = req.params.id;
        console.log(id)

        const result = await QuizService.deleteQuiz(id)

        sendResponse<IQuestion>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Quiz deleted successfully',
            data: result,
        });
    }
)

const getQuizByQuizId = catchAsync(
    async (req: Request, res: Response) => {
        const quizId = req.params.quizId;

        const result = await QuizService.getQuizByQuizId(quizId)

        sendResponse<IQuestion>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Single quiz retrived successfully',
            data: result,
        });




    }
)

const getQuizById = catchAsync(
    async (req: Request, res: Response) => {
        const id = req.params.id;

        const result = await QuizService.getQuizByQuizId(id)

        sendResponse<IQuestion>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Single quiz retrived successfully',
            data: result,
        });




    }
)


export const QuizController = {
    createQuiz,
    fetchAllQuizzes,
    updateQuiz,
    deleteQuiz,
    getQuizByQuizId,
    getQuizById
}