import React, { useState } from 'react';
import classes from './Layout.module.css'
import MenuToggle from "../../components/UI/menuToggle/menuToggle";
import Drawer from "../../components/Navigation/drawer/drawer";


const Layout = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const onToggle = () => {
        setIsOpen(!isOpen)
    }
    const onClose = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={classes.Layout}>
            <MenuToggle
                isOpen={isOpen}
                onToggle={onToggle}
            />
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
            />
        <main>
            {
                isOpen ? <div onClick={onClose} className={classes.backdrop}/> : null
            }
            { props.children }
        </main>
        </div>
    );
};

export default Layout;