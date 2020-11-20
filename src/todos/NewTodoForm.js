import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createTodo} from "./actions";
import styled from 'styled-components';

const NewTodoFormContainer = styled.div`
        background-color: white;
        border-radius: 10px;
        box-shadow: 5px 5px whitesmoke;
        min-height: 30px;
        margin-top: 40px;
        width: 500px;
`;

const NewTodoInput = styled.input`
    background-color: ghostwhite;
    min-width: 300px;
    min-height: 20px;
    border-color: ghostwhite;
    border-radius: 10px;
`;

const NewTodoButton = styled.button`
    background-color: darkseagreen;
    border: none;
    border-radius: 10px;
    margin-left: 10px;
    min-height: 20px;
    color: white;
`;

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const onAddClicked = () => {
        if (inputValue !== '') {
            dispatch(createTodo(inputValue));
            setInputValue('');
        }
    }
    const onKeyDown = (event) => {
        if (event.key === 'Enter' && inputValue !== '') {
            dispatch(createTodo(inputValue));
            setInputValue('');
        }
    }
    return(
    <NewTodoFormContainer>
        <NewTodoInput
            type='text'
            placeholder='type your new todo here'
            value={inputValue}
            onChange={e=> setInputValue(e.target.value)}
            onKeyDown={onKeyDown}
        />
        <NewTodoButton onClick={onAddClicked}>+</NewTodoButton>
    </NewTodoFormContainer>
    );
}

export default NewTodoForm;