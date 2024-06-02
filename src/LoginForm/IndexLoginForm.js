import React from 'react';


function LogForm(){

    const [openModalCreateUser, setOpenModalCreateUser] = React.useState(false);
    const TodoContext = React.createContext();


    const {
        setOpenModalLogin,
        addTodo,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModalLogin(false);
    };

    const onCancel = () => {
        openModalCreateUser(false);
    };

    const onChange = (event) => {
        console.log(event);

        setNewTodoValue(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Create new user</label>
            <textarea placeholder="New User" value={newTodoValue} onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
            <button type='button' className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancel</button>
            <button type="submit" className="TodoForm-button TodoForm-button--add">Add</button>
            </div>
        </form>        
    );
}


export {LogForm};