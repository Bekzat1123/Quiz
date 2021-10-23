import React from 'react';
import classes from './menuToggle.module.css'

const MenuToggle = ({isOpen, onToggle }) => {
    let cls = [
        classes.menuToggle,
        'fa'
    ]
    if (isOpen) {
        cls = [...cls, 'fa-times', classes.open]
    } else {
        cls = [...cls, 'fa-bars']
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={onToggle}
        />

    );
};

export default MenuToggle;