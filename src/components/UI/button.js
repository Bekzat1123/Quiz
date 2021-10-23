import React from 'react';
import classes from './button.module.css'
const Button = ({ children, onclick, disabled, type }) => {
    const cls = [
        classes.button,
        classes[type]
    ]
    return (
        <button onClick={onclick} className={cls.join(' ')} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;