import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

import { requestTaskCreation } from "../store/mutations";

const mapStateToProps = (state, ownProps) => {
    let groupID = ownProps.id;
    return {
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(task => task.group === groupID)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNewTask(id){
            console.log("Creating new task: ",id);
            dispatch(requestTaskCreation(id))
        }
    }
}

const TaskList  = ({ tasks, name, id, createNewTask }) => (
    <div>
        <h3>{name}</h3>
        <div>
            {tasks.map(task => (
                <Link to={`/task/${task.id}`} key={task.id}>
                    <div>{task.name}</div>
                </Link>
            ))}
        </div>
        <button onClick={() => createNewTask(id)}>Add New</button>
    </div>
)

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);