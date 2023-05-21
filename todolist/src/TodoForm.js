import react, { useState } from 'react';

function TodoForm(createTodo) {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    function handleTaskChange(e) {
        setTask(e.target.value);
    }

    function handleDateChange(e) {
        setDate(e.target.value);
    }

    function handleTimeChange(e) {
        setTime(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        createTodo(task);
        setTask('');
        console.log(task, date, time);
    }

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task</label>
        <input
            type="text"
            id="task"
            name="task"
            value={task}
            onChange={handleTaskChange}
        />
        <label htmlFor="date">Date</label>
        <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleDateChange}
        />
        <label htmlFor="time">Time</label>
        <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={handleTimeChange}
        />
        <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;