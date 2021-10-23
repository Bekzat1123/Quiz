import React from 'react';
import classes from './AnswerItem.module.css'

const AnswerItem = ({answer, handleNextAnswer, answerState}) => {
    const cls = [classes.AnswerItem]
    if (answerState) {
        cls.push(classes[answerState])
    }
    return (
        <li
            onClick={() => handleNextAnswer(answer.id)}
            className={cls.join(' ')}
        >
            { answer.text }
        </li>
    );
};

export default AnswerItem;