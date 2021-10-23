import React from 'react';
import classes from './input.module.css'


const isInvalid = (valid,touched, validate) => {
    return !valid && validate && touched
}

const Input = ({ type, value, onChange, label, placeholder, errorMassage, valid, touched, validate }) => {
    let cls = [
        classes.input
    ]
    if (isInvalid(valid,touched, validate )) {
        cls = [
            ...cls, classes.invalid
        ]
    }

    const htmlFor = `${type}${Math.random()}`
    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}> {label} </label>
            <input
                type={ type || 'text' }
                value={value}
                onChange={onChange}
                id={htmlFor}
                placeholder={placeholder || ''}
            />
            {
                isInvalid(valid,touched, validate) ?
                    <span>{errorMassage}</span> : null
            }
        </div>
    );
};

export default Input;