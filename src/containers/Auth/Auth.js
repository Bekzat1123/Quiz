import React, { useState } from 'react';
import classes from './auth.module.css'
import Button from "../../components/UI/button";
import Input from "../../components/UI/input/input";
import  is  from 'is_js'

const Auth = () => {

    const [formControl, setFormControl] = useState({
        email: {
            value: '',
            type: 'email',
            label: 'Email',
            errorMassage: 'Введите корректный Email',
            valid: false,
            touched: false,
            validate: {
                required: true,
                email: true,
            }
        },
        password: {
            value: '',
            type: 'password',
            label: 'Password',
            errorMassage: 'Введите корректный пароль',
            valid: false,
            touched: false,
            validate: {
                required: true,
                minLength: 6
            }
        }
    })

    const [isFormValid, setIsFormValid] = useState(false)

    const handleLogin = () => {

    }

    const registerHandle = () => {

    }
    const submitHandler = (e) => {
        e.preventDefault()
    }

    const validateControl = (value, validate ) => {
        if (!validate) {
            return true
        }
        let isValid = true

        if (validate.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (validate.email) {
            isValid = is.email(value) && isValid
        }

        if (validate.minLength) {
            isValid = value.length >= validate.minLength && isValid
        }


        return isValid
    }

    const onChangeHandle = (e,controlName) => {
        const formControls = { ...formControl }
        const control = formControls[controlName]


        control.value = e.target.value
        control.touched = true
        control.valid = validateControl(control.value, control.validate)

        let isFormValid = true
         Object.keys(formControls).forEach(name => {
             isFormValid = formControls[name].valid && isFormValid
         })

        setFormControl(formControls)
        setIsFormValid(isFormValid)
    }


    const renderInput = () => {
        return Object.keys(formControl).map((controlName,idx) => {
            const control = formControl[controlName]
            return (
                <Input
                    key={controlName + idx}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    validate={control.validate}
                    errorMassage={control.errorMassage}
                    onChange={(e) => onChangeHandle(e,controlName)}
                />
            )
        })
    }

    return (
        <div className={classes.auth}>
            <div>
                <h1>Авторизация</h1>
                <form
                    onSubmit={submitHandler}
                    className={classes.authForm}
                >
                    {
                        renderInput()
                    }
                    <Button
                        type='success'
                        onclick={handleLogin}
                        disabled={!isFormValid}
                    >Войти</Button>
                    <Button
                        type='primary'
                        onclick={registerHandle}
                        disabled={!isFormValid}
                    >Регистрация</Button>
                </form>
            </div>
        </div>
    );
};

export default Auth;