import React from 'react';
import classes from './select.module.css'

const Select = ({ label, value, onChange, options}) => {
    const htmlFor = `${label} - ${Math.random()}`
    return (
        <div className={classes.select}>
            <label htmlFor={htmlFor}>{ label }</label>
            <select
                id={htmlFor}
                value={value}
                onChange={onChange}
            >
                {
                    options.map((option, idx) => {
                        return (
                            <option
                                value={option.value}
                                key={option.value + idx}
                            >
                                { option.text }
                            </option>
                        )
                    })
                }

            </select>

        </div>
    );
};

export default Select;