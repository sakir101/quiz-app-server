import express from 'express'
import { QuizValidation } from './quiz.validation'
import { QuizController } from './quiz.controller'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

router.post('/', validateRequest
    (QuizValidation.questionSchema),
    QuizController.createQuiz
)

export const QuizRoutes = router