import React from 'react';
import { useDispatch } from 'react-redux';
import {completedTodo, removeTodo} from "./actions";
import styled from 'styled-components';

const TodoItemContainer = styled.div`
    background-color: white;
    width: 500px;
    margin-top: 20px;
    box-shadow: 5px 5px whitesmoke;
    border-radius: 10px;
`;

const ButtonsContainer = styled.div`
    margin-left: 20px;
    background-color: floralwhite;
    display: inline-block;
`;

const CompletedButton = styled.button`
    background-color: darkseagreen;
    border: none;
    border-radius: 10px;
    display: inline-block;
    color: white;
    height: 20px;
`;

const RemoveButton = styled.button`
    background-color: lightcoral;
    border: none;
    border-radius: 10px;
    display: inline-block;
    margin-left: 20px;
    color: white;
    height: 20px;
`;

const TodoListItem = ({todo}) => {
    const dispatch = useDispatch();

    const onRemoveClick = () => {
        dispatch(removeTodo(todo.text))
    }
    const onCompletedClick = () => {
        dispatch(completedTodo(todo.text))
    }
    if (todo.isCompleted === false) {
        return (
            <TodoItemContainer>
                <span>{todo.text}</span>
                <ButtonsContainer>
                    <CompletedButton onClick={onCompletedClick}>✓</CompletedButton>
                    <RemoveButton onClick={onRemoveClick}>X</RemoveButton>
                </ButtonsContainer>

            </TodoItemContainer>
        )
    } else {
        return (
            <TodoItemContainer>
                <span>{todo.text}</span>
                <ButtonsContainer>
                    <CompletedButton onClick={onCompletedClick}>▲</CompletedButton>
                    <RemoveButton onClick={onRemoveClick}>X</RemoveButton>
                </ButtonsContainer>

            </TodoItemContainer>)
    }
}


export default TodoListItem;