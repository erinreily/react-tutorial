import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const TaskForm = () => {
    const [text, setText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (!text) return;

        Meteor.call('tasks.insert', text);

        setText("");
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <label>Type to add a new task
                <input
                    id="addTask"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>

            <button type="submit">Add Task</button>
        </form>
    )
};