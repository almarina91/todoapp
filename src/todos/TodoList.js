import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from "./NewTodoForm";
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const selectTodos = state => state.todos;

const BigTitle = styled.div`
    color: lightgrey;
    font-size: 50px;
    font-family: "American Typewriter";
    font-weight: bold;
`;

const ListWrapper = styled.div`
    background-color: white;
    color: grey;
    width: 500px;
`;

const ListSubtitle = styled.span`
    background-color: white;
    color: darkseagreen;
    font-family: "American Typewriter", Arial, sans-serif;
    height: 20px;
    width: 500px;
    border-radius: 5px;
`;

const TodoList = () => {
    const todos = useSelector(selectTodos);

    const notCompletedTodos = todos.filter(todo => todo.isCompleted === false);
    const renderedNotCompletedTodos = notCompletedTodos.map(todo => <TodoListItem todo={todo} />);

    const completedTodos = todos.filter(todo => todo.isCompleted === true);
    const renderCompletedTodos = completedTodos.map(todo => <TodoListItem todo={todo} />);

    return(
    <ListWrapper>
        <BigTitle>TO DO LIST</BigTitle>
        <NewTodoForm/>
        {renderedNotCompletedTodos}
        <br/>
        <ListSubtitle>completed:</ListSubtitle>
        {renderCompletedTodos}
    </ListWrapper>)
};

export default TodoList;