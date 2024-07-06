import { Schema, model } from "mongoose";
import { IOption, IQuestion, QuestionModel } from "./quiz.interface";


const OptionSchema = new Schema<IOption>({
    text: { type: String, required: true },
    isCorrect: { type: Boolean, required: true }
});

const QuestionSchema = new Schema<IQuestion>({
    questionText: { type: String, required: true },
    quizId: { type: Number, required: true, unique: true },
    options: { type: [OptionSchema], required: true, validate: [arrayLimit, '{PATH} exceeds the limit of 4'] },
    timeLimit: { type: Number, required: true }
});


function arrayLimit(val: any[]) {
    return val.length === 4;
}

export const Question = model<IQuestion, QuestionModel>("Question", QuestionSchema);