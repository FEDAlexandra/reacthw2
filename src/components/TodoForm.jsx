import { useState } from 'react';

const TodoForm = ({saveTodo}) => {
const [todoTitle, ] = useState('');
const [todoPriority, ] = useState('');
const [todoDescription, ] = useState('');

const onSubmit = () => {
    const todo = {
        title:todoTitle,
        priority:todoPriority,
        description:todoDescription,
    };
     saveTodo(todo);
    
};
return (
<form>
<label htmlFor="todo">

</label>
<button type="button" onClick={onSubmit}>About</button>
</form>
);
};

export default TodoForm;