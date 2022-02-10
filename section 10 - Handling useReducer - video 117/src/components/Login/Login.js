import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const ACTIONS = {
  USER_INPUT: "USER_INPUT",
  USER_BLUR: "USER_BLUR"
}

const emailReducer = (state, action) => {
  if (action.type === ACTIONS.USER_INPUT) {
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type === ACTIONS.USER_BLUR) {
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === ACTIONS.USER_INPUT) {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === ACTIONS.USER_BLUR) {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false }
}


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const ctx = useContext(AuthContext)

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null })

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: ACTIONS.USER_INPUT, val: event.target.value })

    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: ACTIONS.USER_INPUT, val: event.target.value })

    setFormIsValid(
      emailState.isValid && passwordState.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: ACTIONS.USER_BLUR })
  }
  const validatePasswordHandler = () => {
    dispatchPassword({ type: ACTIONS.USER_BLUR })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type='email'
          id="email"
          label="E-Mail"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailIsValid}
        />
        <Input
          type='password'
          id="password"
          label="Password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordIsValid}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
