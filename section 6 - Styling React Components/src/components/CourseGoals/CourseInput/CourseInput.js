import React, { useState } from "react";

import Button from "../../UI/Button/Button";
// import './CourseInput.css';
// import styled from 'styled-components';
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color:  ${props => props.onInvalid ? "red" : "black"};;
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => props.onInvalid ? 'red' : '#ccc'};
//   background: ${props => props.onInvalid ? "#ffd7d7" : "transparent"};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Ajouter un objectif</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Valider</Button>
    </form>
  );
};

export default CourseInput;
