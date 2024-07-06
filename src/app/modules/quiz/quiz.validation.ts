import { z } from "zod";

const optionSchema = z.object({
    text: z.string({
        required_error: "Option text is required",
    }),
    isCorrect: z.boolean({
        required_error: "isCorrect field is required",
    }),
});

const questionSchema = z.object({
    body: z.object({
        questionText: z.string({
            required_error: "Question text is required",
        }),
        quizId: z.number({
            required_error: "Quiz ID is required",
        }),
        options: z.array(optionSchema)
            .length(4, { message: "Exactly 4 options are required" }),
        timeLimit: z.number({
            required_error: "Time limit is required",
        }).positive({
            message: "Time limit must be a positive number",
        }),
    })
});

const createQuizZodSchema = z.object({
    body: z.object({
        questions: z.array(questionSchema, {
            required_error: "Questions are required",
        }).min(1, { message: "At least one question is required" }),
    }),
});

export const QuizValidation = {
    questionSchema
};