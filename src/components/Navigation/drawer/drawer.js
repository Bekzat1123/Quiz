import React from 'react';
import classes from './drawer.module.css'
import { NavLink } from "react-router-dom";

const Drawer = ({isOpen, onClose}) => {
    let cls = [
        classes.drawer
    ]
    if (!isOpen) {
        cls = [...cls, classes.close]
    }

    const links = [
        { to: '/', label: 'Список', exact: true},
        { to: '/auth', label: 'Авторизация', exact: true},
        { to: '/quiz-creator', label: 'Создать тест', exact: true}
    ]
    const renderLink = () => {
        return links.map((link,idx) => {
            return (
                <li key={idx}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={onClose}
                    >
                        { link.label }
                    </NavLink>
                </li>
            )
        })
    }
    return (
        <nav className={cls.join(' ')}>
            <ul>
                {
                    renderLink()
                }
            </ul>
        </nav>
    );
};

export default Drawer;