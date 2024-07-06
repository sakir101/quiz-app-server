import express from 'express'
import { QuizValidation } from './quiz.validation'
import { QuizController } from './quiz.controller'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

router.post('/', validateRequest
    (QuizValidation.questionSchema),
    QuizController.createQuiz
)

router.get('/:quizId', QuizController.getQuizByQuizId)
router.get('/:id', QuizController.getQuizById)

router.patch('/:id',
    QuizController.updateQuiz)
router.delete('/:id', QuizController.deleteQuiz)

router.get('/', QuizController.fetchAllQuizzes)

export const QuizRoutes = router