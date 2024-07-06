import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { QuizService } from "./quiz.service";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";

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


export const QuizController = {
    createQuiz
}