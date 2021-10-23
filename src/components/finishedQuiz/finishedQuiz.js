import React from 'react';
import Button from "../UI/button";
import classes from './finishedQuiz.module.css'

const FinishedQuiz = ({ results, quiz, onRetry }) => {
    const successCount = Object.keys(results).reduce((acc,reс) => {
        if (results[reс] === 'success') {
            acc++
        }
        return acc
    }, 0)
    return (
        <div className={classes.finishedQuiz}>
            <h1>
                Пройдет опрос
            </h1>
            {
                quiz.map((quizItem, idx) => {
                    const cls = [
                        'fa',
                        results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[results[quizItem.id]]
                    ]
                    return (
                        <ul>
                            <li key={idx}>
                                <strong>{ idx + 1}</strong>.
                                { quizItem.question }
                                <i className={cls.join(' ')} />
                            </li>
                        </ul>
                    )
                })
            }
            <p> Правильно {successCount} / { quiz.length}</p>
            <Button onclick={onRetry} type='primary'>Повторить</Button>
            <Button onclick={onRetry} type='error' disabled={true}>Отмена</Button>
        </div>
    );
};

export default FinishedQuiz;