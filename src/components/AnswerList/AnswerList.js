import React from 'react';
import classes from './AnswerList.module.css'
import AnswerItem from "../AnswerItem/AnswerItem";

const AnswerList = ({answer, handleNextAnswer, answerState}) => {
    return (
        <ul
            className={classes.AnswerList}

        >
            {
                answer.map((el) => (
                    <AnswerItem
                        key={el.id}
                        answer={el}
                        handleNextAnswer={ handleNextAnswer }
                        answerState={ answerState ? answerState[el.id] : null }

                    />
                ))
            }
        </ul>
    );
};

export default AnswerList;