import express from 'express'
import { QuizValidation } from './quiz.validation'
import { QuizController } from './quiz.controller'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

router.post('/create', validateRequest
    (QuizValidation.questionSchema),
    QuizController.createQuiz
)

router.get('/:quizId', QuizController.getQuizByQuizId)
router.get('/getQuiz/:id', QuizController.getQuizById)

router.patch('/update/:id',
    QuizController.updateQuiz)
router.delete('/delete/:id', QuizController.deleteQuiz)

router.get('/', QuizController.fetchAllQuizzes)

export const QuizRoutes = router