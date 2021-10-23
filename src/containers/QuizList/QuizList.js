import React, { useEffect } from 'react';
import axios from "axios";
import classes from './QuizList.module.css'
import {NavLink} from "react-router-dom";

const QuizList = () => {

    useEffect(() => {
        axios.get('https://react-quiz-13d52-default-rtdb.europe-west1.firebasedatabase.app/quiz.json')
            .then((res) => console.log(res))
    },[])

    const renderQuizes = () => {
        return [1,2,3].map((quiz,idx) => {
            return (
                <li key={idx}>
                    <NavLink
                        to={`/quiz/${quiz}`}
                    >
                        Test {quiz}
                    </NavLink>
                </li>
            )
        })
    }
    return (
        <div className={classes.quizList}>
            <div>
                <h1>Test</h1>
                <ul>
                    {
                        renderQuizes()
                    }
                </ul>
            </div>
        </div>
    );
};

export default QuizList;