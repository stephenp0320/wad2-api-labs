// src/components/Task.jsx
import React from 'react';

const Task = (props) => {

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "priority high";
      case "Medium":
        return "priority medium";
      case "Low":
        return "priority low";
      default:
        return "priority";
    }
  };
  return (
    <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="description">{props.description}</p>
      <p className={getPriorityClass(props.priority)}>
        {props.priority}
      </p>
      <button onClick={props.markDone} className='doneButton'>Done</button>
      <button className='deleteButton' onClick={props.deleteTask}>Delete</button>



    </div>
  );
};

export default Task;
