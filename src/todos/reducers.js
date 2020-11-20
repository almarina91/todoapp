import {COMPLETED_TODO, CREATE_TODO, REMOVE_TODO} from "./actions";

//zadajemo pocetni state
const initialState = [
        { id: 0, text: 'eat', isCompleted: false },
        { id: 1, text: 'sleep', isCompleted: false },
        { id: 2, text: 'go shopping', isCompleted: false}
    ]


//importujemo akcije i kazemo sta se desava u kom slucaju(reduceri)

export const todos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO : {
            const { text } = payload;
            const newTodo = {
                text: text,
                isCompleted: false
            }
            return state.concat(newTodo)
        }
        case REMOVE_TODO : {
            const { text } = payload;
            return state.filter(todo=>todo.text !== text);
        }
        case COMPLETED_TODO: {
            const { text } = payload;
            return state.map(todo => {
                if (todo.text === text ) {
                    const isCompleted = todo.isCompleted;
                    return {...todo, isCompleted: !isCompleted}
                }
                return todo;
            })
        }
        default: {
            return state;
        }
    }
}