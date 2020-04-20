import React from "react";
import { connect } from "react-redux";

import TaskList from "./TaskList";

const mapStateToProps = state => {
    return {
        groups: state.groups
    }
}

const Dashboard  = ({ groups }) => (
    <div>
        <h2>Dashboard</h2>
        {groups.map(group => (
            <TaskList
                id={group.id}
                name={group.name}
            />
        ))}
    </div>
)

export default connect(mapStateToProps,null)(Dashboard);