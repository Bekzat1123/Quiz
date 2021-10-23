import React, { useState } from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/activeQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/finishedQuiz/finishedQuiz";

const Quiz = () => {
    const [quiz, setQuiz] = useState([
        {
            question: 'Какого цвета небо',
            id: 1,
            rightAnswer: 3,
            answer: [
                { text: 'Красный', id: 1 },
                { text: 'Черный', id: 2 },
                { text: 'Синий', id : 3 },
                { text: 'Зеленый', id: 4 }
            ]
        },
        {
            question: 'Сколько часов в сутках',
            id: 2,
            rightAnswer: 4,
            answer: [
                { text: '25', id: 1 },
                { text: '12', id: 2 },
                { text: '30', id: 3 },
                { text: '24', id: 4 }
            ]
        }

    ])
    const [activeAnswer, setActiveAnswer] = useState(0)
    const [answerState, setAnswerState] = useState(null)
    const [isFinished, setIsFinished] = useState(false)
    const [results, setResults] = useState({})
    const handleNextAnswer = (answerId) => {
        let timeOut = setTimeout(() => {
            const question = quiz[activeAnswer]
            const result = results
            if (question.rightAnswer === answerId) {
                result[question.id] = 'success'
                setResults(result)
                setAnswerState({
                    [answerId]: 'Success'
                })
            } else {
                result[question.id] = 'error'
                setResults(result)
                setAnswerState({
                    [answerId]: 'Error'
                })
            }

            if (quizFinished()) {
                setIsFinished(true)
            } else {
                setAnswerState(null)
                setActiveAnswer(activeAnswer + 1)
            }
            clearTimeout(timeOut)
        },1000)
    }
    const quizFinished = () => {
       return  activeAnswer + 1 === quiz.length
    }
    const onRetry = () => {
        setResults({})
        setIsFinished(false)
        setAnswerState(null)
        setActiveAnswer(0)
    }

    return (
    <div className={classes.Quiz}>

        <div className={classes.QuizWrapper}>
            {
                isFinished ? <FinishedQuiz
                    results={results}
                    quiz={quiz}
                    onRetry={onRetry}
                    /> :
                    <>
                        <h1>
                            Пройдет опрос
                        </h1>
                        <ActiveQuiz
                            answer={quiz[activeAnswer].answer}
                            question={quiz[activeAnswer].question}
                            quizLength={quiz.length}
                            activeAnswer={ activeAnswer + 1 }
                            handleNextAnswer={ handleNextAnswer }
                            answerState={ answerState }
                        />
                    </>
            }
        </div>
        </div>
    );
};

export default Quiz;